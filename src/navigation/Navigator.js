import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Colors from '../styles/Colors';
import { navigationRef } from './RootNavigator';
import Login from '../components/screens/Login';
import Start from '../components/screens/Start';

export default function Navigator() {
    const MyTheme = {
      dark: false,
      colors: {
        background: Colors.white,
        card: Colors.white,
      },
    };
    const Stack = createStackNavigator();
  
    return (
      // <NavigationContainer linking={linking} theme={MyTheme}>
      <NavigationContainer theme={MyTheme} ref={navigationRef}>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Login'
            >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Start' component={Start} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  