import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/Home';
import WhatsAppChatScreen from '@screens/WhatsAppChat';
import ColdEmailScreen from '@screens/ColdEmail';

import { RootStackParamList } from '@app-types/NavigationRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, animation: 'ios_from_right' }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WhatsAppChat" component={WhatsAppChatScreen} />
    <Stack.Screen name="ColdEmail" component={ColdEmailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
