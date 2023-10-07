import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video, { Constants } from 'react-native-video';



const VideoStream = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'udp://192.168.11.107:5000' }}
        style={styles.video}
        resizeMode="contain" // Make sure this line is present
        repeat={true}
        playInBackground={false}
        controls={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoStream;
