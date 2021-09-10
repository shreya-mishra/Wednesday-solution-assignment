import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const Item = ({ artistName, trackName, artworkUrl100, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('TrackplayScreen', {
        artistName,
        trackName,
        artworkUrl100
      })}
  >
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Image
        style={styles.previewUrl}
        source={{
          uri: artworkUrl100
        }}
      />
      <View style={styles.item}>
        <Text style={styles.title}>{artistName}</Text>
        <Text style={styles.title}>{trackName}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SearchItems = ({ navigation, searchedSongs }) => {
  const renderItem = ({ item }) => (
    <Item
      artistName={item.artistName}
      trackName={item.trackName}
      artworkUrl100={item.artworkUrl100}
      navigation={navigation}
    />
  );
  return (
    <View>
      <FlatList
        data={searchedSongs}
        renderItem={renderItem}
        keyExtractor={item => parseInt(item.trackId)}
        style={{ scrollView: 'hidden' }}
      />
    </View>
  );
};
const mapStateProps = state => ({
  searchedSongs: state.searchedSongs
});
export default connect(mapStateProps, null)(SearchItems);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 15
  },
  previewUrl: {
    height: 70,
    width: 60
  }
});
