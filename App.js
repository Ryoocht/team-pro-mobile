import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import TitleScreen from './screens/TitleScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen options={{ headerShown: false }} name="Title" component={TitleScreen} /> */}
          {/* <Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} /> */}
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
