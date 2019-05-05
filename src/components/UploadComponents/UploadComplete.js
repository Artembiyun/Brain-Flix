import React, {Component} from 'react'

// Code not used 
export default class UploadComplete extends Component {
  render() {
    
    document.body.style = 'background-color: #f1f1f1;';

    return (
      <div id="upload">
        <div id="upload--uploadComplete">
          <div id="upload--uploadComplete--thumbnail">
          <img className="container__feed__item--left" src={"./Assets/Images/" + "BASEBALL-MLB-HOU-LAD-.jpg"} alt="Feed-box"></img>
           </div>
          <div id="upload--uploadComplete--info">
          Success! Jose Bautista ALDS Game 5 Batt Flip has been uploaded successfully
          https://youtu.be/E0HRqOsFzXo
          </div>
          <div id="upload--uploadComplete--return">
            <button>Return to editing</button>
          </div>
        </div>
      </div>
    )
  }
}
