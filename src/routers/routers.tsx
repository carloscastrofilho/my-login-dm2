// import { useContext } from "react";
import AppRoutes from "./appRoutes";
import AuthRoutes from "./authRoutes";
import {useAuth} from '../context/auth'
import { ActivityIndicator, View } from "react-native";

export default function Routers() {
  // const {signed, loading } = useContext(AuthContext);
  const {signed, loading } = useAuth(); 
  // const { SignIn } = useAuth(); 
  
  console.log(signed);
  console.log('rota',loading);

  if (loading){
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#f11313" />
            </View>
        );
  }

  return (
    signed ?  <AuthRoutes /> :<AppRoutes/>    
  );
}