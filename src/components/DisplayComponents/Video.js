import React, { Component } from 'react';

class Video extends Component{
    render(){
        const video = this.props.videoContent;
        const API_KEY = '2f3d3777-bdea-472b-87b1-72c1b5d21603';
        const queryString = '?api_key=' + API_KEY;

        return(
        <div id="container__video">
            <video src={video.video + '/' + queryString} poster={video.image} controls></video>
        </div>
        )
    }
}
export default Video;