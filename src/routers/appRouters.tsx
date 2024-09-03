import {createNativeStackNavigator} 
      from '@react-navigation/native-stack';
import Login from "../telas/Login";
import Registrar from "../telas/Registrar";
import Home from '../telas/Home';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AppRouters() {  
  return ( 
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" 
        component={Login} 
        options={{title:'Login Acesso'}}/>
      <Stack.Screen 
        name="Registrar" 
        component={Registrar}
        options={{title:'Login Acesso'} }
       />
      <Stack.Screen name="Home" component={Home}/>   
    </Stack.Navigator>    
  )
}