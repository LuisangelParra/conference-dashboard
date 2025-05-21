import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen';
import EventsScreen from '../screens/EventsScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import ReviewsScreen from '../screens/ReviewsScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  Events: undefined;
  Speakers: undefined;
  Reviews: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Dashboard"
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Speakers" component={SpeakersScreen} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
