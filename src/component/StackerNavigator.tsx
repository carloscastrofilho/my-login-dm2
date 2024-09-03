import {createNativeStackNavigator} 
      from '@react-navigation/native-stack';
import Login from "../telas/Login";
import Registrar from "../telas/Registrar";
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {  
  return ( 
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar}/>
      <Stack.Screen name="Home" component={Home}/>   
    </Stack.Navigator>    
  )
}