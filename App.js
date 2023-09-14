import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './pages/signup';
import Login from './pages/login';
import Home from './pages/dashboard';
import passwordReset from './pages/passwordReset';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="passwordReset" component={passwordReset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

