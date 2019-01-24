import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { getData } from "./mock-data";
import MyPlayer from "./components/MyPlayer";
import VideoList from "./components/VideoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const mockData = getData();
    this.state = {
      videos: mockData,
      activeVideo: mockData[0]
    };
  }

  setActiveVideo = title => {
    const newVideo = this.state.videos.find(video => {
      return video.title === title;
    });
    this.setState({
      activeVideo: newVideo
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.state.activeVideo.color }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <MyPlayer video={this.state.activeVideo} />
        </View>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <VideoList videos={this.state.videos} onClick={this.setActiveVideo} video={this.state.activeVideo} />
        </View>
      </View>
    );
  }
}
