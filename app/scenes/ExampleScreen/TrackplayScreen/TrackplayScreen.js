import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import AppContainer from '@atoms/Container';
import { colors } from '@themes';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

const Container = styled(AppContainer)`
  display: flex;
  background-color: ${colors.primary};
`;
// var sound1 = new Sound(
//   'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
//   '',
//   (error, sound) => {
//     if (error) {
//       alert('error' + error.message);
//       return;
//     }
//     sound1.play(() => {
//       sound1.release();
//     });
//   }
// );
export default function TrackplayScreen({ route, navigation }) {
  const { artistName, trackName, artworkUrl100 } = route.params;
  return (
    <Container>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Image
          style={styles.previewUrl}
          source={{
            uri: artworkUrl100
          }}
        />
        <Text style={styles.title}>{trackName}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <AntDesign name="stepbackward" size={24} color="black" />
          <AntDesign name="pause" size={24} color="black" />
          <AntDesign name="stepforward" size={24} color="black" />
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#fae8d2',
    width: '100%',
    padding: 15,
    marginVertical: 8,
    alignItems: 'center'
  },
  title: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold'
  },
  previewUrl: {
    marginTop: 150,
    height: 300,
    width: 250
  }
});
