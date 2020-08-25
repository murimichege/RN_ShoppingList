import * as  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/createList'
import List from './Screens/List'

const Stack = createStackNavigator();

export default function MainStackNavigator(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

