// TabNavigator.js 
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo, Feather,Ionicons } from '@expo/vector-icons';
import ButtonNew from './ButtonNew';
//<Ionicons name="exit" size={24} color="black" />

// telas disponivel na rota
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
import FichaUsuario from '../telas/FichaUsuario';
//
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

// tab menu
const Tab = createBottomTabNavigator();

const SairPrograma = () => {
    signOut(auth);
}

export default function TabNavigator({user}) {
    //console.log(user);
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#000',
                borderTopColor: "transparent",
            },
            tabBarActiveTintColor: '#fff',
            // tabBarActiveBackgroundColor: '#fff',
            paddingBottom: 5,
            paddingTop:  5,
        }
            
         }>
            <Tab.Screen name="Home" component={Home}
                initialParams={{ user }} 
                options={{ tabBarLabel: 'início',
                         tabBarIcon: ({ color, size }) => (
                          <Entypo name="home" color={color} size={size} />
                         )
                    }}/>
            <Tab.Screen name="Registro" component={Registrar}/>
            <Tab.Screen name="ficha" component={FichaUsuario}/>
            <Tab.Screen name="Sair" component={SairPrograma}
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} /> )
                }}/>
        </Tab.Navigator>
      );
  };

  // <Tab.Navigator       
  //       screenOptions={{
  //         headerShown: false ,
  //         tabBarStyle: {
  //           backgroundColor: '#121212',
  //           borderTopColor: 'transparent'
  //         },
  //         tabBarActiveTintColor: '#FFF',
  //         paddingBottom: 5,
  //         paddingTop: 5,
  //       }}>
  //       <Tab.Screen
  //         name="Inicio"
  //         component={Home}
  //         options={{
  //           tabBarLabel: 'Inicio',
  //           tabBarIcon: ({ color, size }) => (
  //             <Entypo name="home" color={color} size={size} />
  //           )
  //         }}
  //       />
  
  //       <Tab.Screen
  //         name="Search"
  //         component={FichaUsuario}
  //         options={{
  //           tabBarLabel: 'Usuario',
  //           tabBarIcon: ({ color, size }) => (
  //             <Feather name="search" color={color} size={size} />
  //           )
  //         }}
  //       />
  
  //       <Tab.Screen
  //         name="Novo"
  //         component={FichaUsuario}
  //         options={{
  //           tabBarLabel: '',
  //           tabBarIcon: ({ focused, color, size }) => (
  //             <ButtonNew size={size} focused={focused} />
  //           )
  //         }}
  //       />
  
  //       <Tab.Screen
  //         name="Registrar"
  //         component={Registrar}
  //         options={{
  //           tabBarLabel: 'Registro',
  //           tabBarIcon: ({ color, size }) => (
  //             <Entypo name="notification" color={color} size={size} />
  //           )
  //         }}
  //       />
  
  //       <Tab.Screen
  //         name="Perfil"
  //         component={FichaUsuario}
  //         options={{
  //           tabBarLabel: 'Perfil',
  //           tabBarIcon: ({ color, size }) => (
  //             <Feather name="user" color={color} size={size} />
  //           )
  //         }}
  //       />
  
  // </Tab.Navigator>
    