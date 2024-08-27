// TabNavigator.js 
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo, Feather,Ionicons } from '@expo/vector-icons';
import ButtonNew from './ButtonNew';
//<Ionicons name="exit" size={24} color="black" />

// telas disponivel na rota
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
// import FichaUsuario from '../telas/FichaUsuario';
//
import { auth } from "../config/firebase";
// import { signOut } from "firebase/auth";

import { NavigationProp, ParamListBase } from '@react-navigation/native';

// tab menu
const Tab = createBottomTabNavigator();

// const SairPrograma = (navigation:NavigationProp<ParamListBase>) => {
//     // signOut(auth);
//     navigation.navigate('Login')
// }

interface SairProgramaProps {
    navigation: NavigationProp<ParamListBase>;
  }
  
const SairPrograma: React.FC<SairProgramaProps> = ({ navigation }) => {
    // Aqui você pode chamar o signOut se estiver descomentado
    // signOut(auth);    
    // Navega para a tela de login
    return null; // Como não queremos renderizar nada, retorna null
  };

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#000',
                borderTopColor: "transparent",
            },
            tabBarActiveTintColor: '#fff',
            // tabBarActiveBackgroundColor: '#fff',
           
        }
            
         }>
            <Tab.Screen name="Home" 
                component={Home}
                options={{ tabBarLabel: 'início',
                         tabBarIcon: ({ color, size }) => (
                          <Entypo name="home" color={color} size={size} />
                         )
                    }}/>
            <Tab.Screen name="Registro" component={Registrar}/>
            {/* <Tab.Screen name="ficha" component={FichaUsuario}/> */}
            <Tab.Screen name="Sair" component={SairPrograma}
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} /> )
                }}/>
        </Tab.Navigator>
      );
  };