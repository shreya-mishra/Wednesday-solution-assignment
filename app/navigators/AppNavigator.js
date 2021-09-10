import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@scenes/SplashScreen/';
import ExampleScreen from '@scenes/ExampleScreen';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from '../services/NavigationService';
import HomeScreen from '../scenes/ExampleScreen/HomeScreen/HomeScreen';
import TrackplayScreen from '../scenes/ExampleScreen/TrackplayScreen/TrackplayScreen';
const Stack = createStackNavigator();
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
export default function AppNavigator() {
  return (
    <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="MainScreen" component={HomeScreen} />
        <Stack.Screen name="TrackplayScreen" component={TrackplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
