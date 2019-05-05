import React, {Component} from 'react';

class Description extends Component {

  render() {

    const video = this.props.videoDescription;

    return (
      <div id="container__description">
        <div id="container__description--title">
          <div id="container__description--title__text">
            <h2>{video.title}</h2>
          </div>
          <div id="container__description--title__values">
            <h4>{video.views} views</h4>
            <div id="container__description--title__values__stats2">
              <img src={"/Assets/Icons/Thumbs\ Up.svg"} alt="Thumbs Up"></img>
              <h4>{video.thumbsUp}</h4>
              <img src={"/Assets/Icons/Thumbs\ Down.svg"} alt="Thumbs Down"></img>
              <h4>{video.thumbsDown}</h4>
              <img src={"/Assets/Icons/Share.svg"} alt="Share"></img>
              <h4>SHARE</h4>
            </div>
          </div>
        </div>

        <div id="container__description--desc">
          <div id="container__description--desc--icon">
            <div id="container__description--desc--icon__avatar"></div>
          </div>
          <div id="container__description--desc--head">
            <div>
            <h3>{video.channel}</h3>
            <h5>Published on Oct 2015
            </h5>
            </div>
            <div id="container__description--desc--subscribe">
            SUBSCRIBE  {video.subscriberCount}
            </div>
          </div>
          <div id="container__description--desc--write-up">
          <p className="description-text">{video.description}</p>
          <h4>SHOW MORE</h4>
        </div>
      </div>
      </div>
    )
  }
}

export default Description;