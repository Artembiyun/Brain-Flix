import React, {Component} from 'react'
import Video from './DisplayComponents/Video';
import Description from './DisplayComponents/Description';
import Feed from './DisplayComponents/Feed';
import Comments from './DisplayComponents/Comments';
import {withRouter} from 'react-router-dom';

class Main extends Component {
  
  state = {
    videos: [],
    isLoading: true,
    confirmed: "",
    data: {
      comments: [],
    }
  }

  componentDidMount() {
    const {match} = this.props;

    fetch('http://localhost:8080/videoLinks')
      .then(response => response.json())
      .then(videoData => {
        this.setState({videos: videoData, isLoading: false});
      });

      fetch('http://localhost:8080/videos/' + match.params.id)
        .then(response => response.json())
        .then(data => {
          this.setState({data:data})
        });
  };

  componentDidUpdate(prevProps, prevState) {
    const baseURL = 'http://localhost:8080/videos/';
    const {match} = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      fetch(baseURL + match.params.id)
        .then(response => response.json())
        .then(data => {
          this.setState({data:data})
        })
    }
  }

  commentSubmit = (e) => {
    e.preventDefault();
    let comment = e.target.com.value;
    let name = "James Jonah Jameson";     
    this.submitHandler(name, comment);
  }

  jsonifyObject(obj) {
    const init = {
        body: JSON.stringify(obj),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    };
    return init;
}

  submitHandler(name, comment){
    let commentArray = {
      name:name, 
      comment:comment
    };
    let init = this.jsonifyObject(commentArray);
    const {match} = this.props;

    
    const promise = fetch('http://localhost:8080/videos/' + match.params.id, init)
    promise.then(response => response.json())
    .then((response) => {
      this.setState({
          confirmed: response.confirmed
      });
    })
  }

  render() {
    return (
      <div id="container">
        <Video videoContent={this.state.data}/> 
        {this.state.isLoading && "Loading..."}
        {< Feed videoArray = {
          this.state.videos
        } />}
        <Description videoDescription={this.state.data}/>
        <Comments videoComments={this.state.data.comments} commentSubmit={this.commentSubmit}/>
      </div>
    )
  }
}
export default withRouter(Main);