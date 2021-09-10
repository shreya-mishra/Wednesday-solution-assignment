import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { create } from 'apisauce';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getSearchResult } from '../../store/action';

const Search = ({ searchedSongs, setSearchedSongs }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [data, setData] = useState({});
  useEffect(() => {
    console.log('state', searchedSongs);
  }, [searchedSongs]);

  const handleSearch = text => {
    setSearchKeyword(text);
  };

  const api = create({
    baseURL: 'https://api.github.com',
    headers: { Accept: 'application/vnd.github.v3+json' }
  });
  const handleClick = () => {
    if (!searchKeyword) {
      alert('please enter any music and artist');
    } else {
      api
        .get(`https://itunes.apple.com/search?term=${searchKeyword}`)
        .then(response => {
          setData(response.data.results);
          Dispatch(setSearchedSongs(response.data.results));
        });
    }
  };

  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: 'black',
          color: 'white'
        }}
        onChangeText={text => handleSearch(text)}
        placeholder="Search Music And Artist"
        placeholderTextColor="grey"
      />
      <TouchableOpacity
        onPress={handleClick}
        style={{
          position: 'absolute',
          right: 0,
          top: 3,
          padding: 5
        }}
      >
        <Entypo name="magnifying-glass" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const mapStateProps = state => ({
  searchedSongs: state.searchedSongs
});

const mapDispatchToProps = dispatch => ({
  setSearchedSongs: state => dispatch(getSearchResult(state))
});
export default connect(mapStateProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
    width: '100%'
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5
  }
});
