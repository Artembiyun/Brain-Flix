import React, {Component} from 'react';
import ThumbNail from './ThumbNail';

class Feed extends Component {
  render() {

    let videos = this.props.videoArray;
    let thumbnails = [];
    for (let v = 0; v < videos.length; v++) {
      let thumbnail = <ThumbNail

        key = {videos[v].id}
        Id = {videos[v].id}
        Title={videos[v].title}
        Channel={videos[v].channel}
        Views={videos[v].views}
        Length= "4:20"
        img={videos[v].image}/>
      thumbnails.push(thumbnail);
    }

    return (
      <div id="container__feed">
        <div id="container__feed__upnext">
          <h3>Up Next</h3>
        </div>
        {thumbnails}
      </div>
    )
  }
}

export default Feed;