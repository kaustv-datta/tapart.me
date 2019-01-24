import React from "react";
import { StyleSheet, View } from "react-native";
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { Text } from 'react-native-elements';

export default class MyPlayer extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <React.Fragment>
        <Text h4 style={{color: 'black', textAlign: 'center'}}>{video.title}</Text>
        <VideoPlayer
            source={{ uri: video.url }}
            disableFullscreen={true}
            disableBack={true}
        />
      </React.Fragment>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
backgroundVideo: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
},
});
