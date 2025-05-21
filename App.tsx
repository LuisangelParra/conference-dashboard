// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from './event-dashboard/screens/DashboardScreen';
import EventsScreen    from './event-dashboard/screens/EventsScreen';
import SpeakersScreen  from './event-dashboard/screens/SpeakersScreen';
import ReviewsScreen   from './event-dashboard/screens/ReviewsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Events"    component={EventsScreen}    />
          <Stack.Screen name="Speakers"  component={SpeakersScreen}  />
          <Stack.Screen name="Reviews"   component={ReviewsScreen}   />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
