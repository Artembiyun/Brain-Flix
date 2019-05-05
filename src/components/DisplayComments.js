import React, {Component} from 'react'

export default class DisplayComments extends Component {
  render() {
    let comments = this.props.comments;

    return (
      <div>
        {comments.map((user, index) => <div key={index}>
          <div id="comment-item">
            <div className="profile comsec"></div>
            <div>
              <h3>{user.name}</h3>
              <h5>{user.timestamp}</h5>
            </div>
            <div>
              </div>
            <div>
              <p id="comment-item__comst">{user.comment}</p>
            </div>
          </div>
        </div>)}
      </div>
    )
  }
}
