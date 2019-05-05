import React, {Component} from 'react'

//code not used
export default class UploadForm extends Component {
  render() {
    // not sure if best practice however this was the most efficient way to change
    // body color for upload page
    document.body.style = 'background-color: #f1f1f1;';

    return (
      <div id="upload">
        <div id="upload--uploadForm">
        {/*
          <div id="upload--uploadForm--div1">
            <img
              className="container__feed__item--left"
              src={"./Assets/Images/BASEBALL-MLB-HOU-LAD-.jpg"}
              alt="Feed-box"></img>
          </div>
          <div id="upload--uploadForm--div2">
            <h2>Processing 80%</h2>
            <h4>* Click “Publish” to make your video live.
            </h4>
          </div>
          <div id="upload--uploadForm--div3">
            <h2>Upload Status:</h2>
            <h4>Processing</h4>
          </div>
          <div id="upload--uploadForm--div4">
            <div id="upload--uploadForm--div4__form-box">
              <h2>Basic Information</h2>
              <form>
                Title:
                <input id="title" type="text" placeholder="Add a title to your video"></input>
                Description:
                <textarea rows="4" cols="30"></textarea>
                Tags:
                <input type="text" id="tags" placeholder="(e.g., albert einstein, ﬂying pig, mashup, videos)"></input>

              </form>
            </div>
          </div>
        */}
        </div>
      </div>
    )
  }
}
