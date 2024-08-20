// StackNavigator.js

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from "../telas/Login";
import Registrar from "../telas/Registrar";

type UserProps = {
  name: string;
  email: string;
  logo: string;
  token: string;  
}

//  configurar  - <Stack.Screen name="Home" component={Home}/>
const Stack = createNativeStackNavigator();

export default function StackNavigator( {user:UserProps}) {
  
  return ( 
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar}/>     
    </Stack.Navigator>    
  )
}