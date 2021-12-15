import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleScreen from './screens/TitleScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{ headerShown: false }} 
          name="Title" 
          component={TitleScreen} 
        />
        <Stack.Screen 
          options={{ 
            title: 'Sign In',
            headerStyle: { backgroundColor: "#004445" },
            headerTitleStyle: { color: "#fff1c1" }
          }} 
          name="Signup" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          options={{ 
            title: 'Log In', 
            headerStyle: { backgroundColor: "#004445" },
            headerTitleStyle: { color: "#fff1c1" }
          }} 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'TeamPro',
            headerStyle: { backgroundColor: "#004445" },
            headerTitleStyle: { color: "#fff1c1" }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
