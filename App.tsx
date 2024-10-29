import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers/routers';
import { AuthProvider } from './src/context/auth';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PersonProvider } from './src/context/person';

export default function App() {
  return (
    <NavigationContainer>
      <PersonProvider>
        <AuthProvider>
          <Routers />
        </AuthProvider>
        <StatusBar style="auto" />
      </PersonProvider>
    </NavigationContainer>
  );
}