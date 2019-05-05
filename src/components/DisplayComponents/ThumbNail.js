import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ThumbNail extends Component {
  render() {
    return (
      <div id="container__feed__item">
        <Link to={"/main/" + this.props.Id}>
          <div id="container__feed__item--left">
            <img
              className="container__feed__item--left"
              src={this.props.img}
              alt="Feed-box"></img>
          </div>
          </Link>
        
        <div id="container__feed__item--right">
          <h3>{this.props.Title}</h3>
          <h5>{this.props.Channel}</h5>
          <h5>{this.props.Views} views</h5>
        </div>
      </div>
    )
  }
}
export default ThumbNail;