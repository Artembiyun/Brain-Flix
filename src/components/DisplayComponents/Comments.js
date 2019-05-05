import React, {Component} from 'react';
import DisplayComments from '../DisplayComments';

export default class Comments extends Component {
  render() {
    return (
      <div>
        <form id="postComment--form" onSubmit={this.props.commentSubmit}>
          <div id="postComment">
            <div className="profile comsec"></div>
            <textarea
              id="postComment--form__text-area"
              name="com"
              rows="1"
              cols="20"
              placeholder="Add a public comment"></textarea>
            <div id="postComment--buttons">
              <button type="reset" id="postComment--buttons--cancel">CANCEL</button>
              <button type="submit" id="postComment--buttons--submit" value="submit">COMMENT</button>
            </div>
          </div>
        </form>
        <DisplayComments
          comments={this.props.videoComments}
          submitComments={this.props.submitComments}/>
      </div>
    )
  }
}
