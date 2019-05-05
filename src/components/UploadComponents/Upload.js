import React, {Component} from 'react';

export default class Upload extends Component {

  constructor() {
    // not sure if best practice however this was the most efficient way to change
    // body color for upload page
    document.body.style = 'background-color: #f1f1f1;';
    super();
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({title: this.refs.title.value,
      description: this.refs.description.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div id="upload">
        <div id="upload--uploadBox">
          <div id="upload--uploadBox--boxLeft">
            <form onSubmit={this.handleSubmit}>
              <h2>Title:</h2>
              <input 
                ref="title">
                </input>
              <h2>Description:</h2>
              <textarea 
                ref="description">
                </textarea>
              <button type="submit" id="upload--uploadBox--boxLeft--submit">Submit</button>
            </form>

          </div>
          <div id="upload--uploadBox--boxRight">
            <div id="upload--uploadBox__upload-icon">
              <img src={"Assets/Icons/LargeUpload.svg"} alt="Upload Video"></img>
            </div>
            <h2>Select files to upload</h2>
            <h4>Or drag and drop video files</h4>
          </div>
        </div>
      </div>
    )
  }
}
