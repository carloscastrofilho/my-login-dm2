import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers/routers';
import { AuthProvider } from './src/context/auth';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
            <Routers />             
         </AuthProvider>            
         <StatusBar style="auto"/>     
    </NavigationContainer>
  );
}