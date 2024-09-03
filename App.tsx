import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/routers/routers';
import AuthContext from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed:true}}>
        <Routers />
        <StatusBar style="auto" />
      </AuthContext.Provider>      
    </NavigationContainer>
  );
}


