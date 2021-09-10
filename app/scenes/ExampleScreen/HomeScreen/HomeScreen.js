import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppContainer from '@atoms/Container';
import { colors, images } from '@themes';
import styled from 'styled-components';
import Search from '../../../components/search/Search';
import SearchItems from '../../../components/searchItems/SearchItems';

const Container = styled(AppContainer)`
  display: flex;
  background-color: ${colors.primary};
`;
const styles = StyleSheet.create({
  home: {
    padding: 10,
    marginTop: 27
  }
});
const HomeScreen = ({ navigation }) => (
  <Container>
    <View style={styles.home}>
      <Search />
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Top Results</Text>
      <SearchItems navigation={navigation} />
    </View>
  </Container>
);

export default HomeScreen;
