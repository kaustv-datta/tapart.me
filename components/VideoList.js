import React from "react";
import { View } from "react-native";
import { Button } from 'react-native-elements';

export default class VideoList extends React.Component {
  render() {
    const currentVideo = this.props.video;

    return (
      <React.Fragment>
        {this.props.videos.map((video, i) => (
          <Button
            key={i}
            raised
            backgroundColor={currentVideo.title === video.title ? "darkgray" : "black"}
            title={video.title}
            onPress={() => {
              this.props.onClick(video.title);
            }}
          />
        ))}
      </React.Fragment>
    );
  }
}
