import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/component/StackerNavigator';

type UserProps = {
  name: string;
  email: string;
  logo: string;
  token: string;  
}


export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}


