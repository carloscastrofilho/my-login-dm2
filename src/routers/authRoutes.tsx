import React, { useContext, useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo, Feather,Ionicons } from '@expo/vector-icons';
import {useAuth} from '../context/auth';
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
    const { SignOut } = useAuth(); 
    
    // O componente Logout agora usa useEffect para chamar SignOut
    const Logout = () => {
        SignOut();         
        return null; // Não renderiza nada
    };

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#000',
                borderTopColor: "transparent",
            },
            tabBarActiveTintColor: '#fff'           
        }
            
         }>
            <Tab.Screen name="Home" 
                component={Home}
                options={{ tabBarLabel: 'início',
                         tabBarIcon: ({ color, size }) => (
                          <Entypo name="home" color={color} size={size} />
                         )
                    }}/>
            <Tab.Screen name="Registro" 
                component={Registrar}
            />

            <Tab.Screen name="Sair" component={ Logout }
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} /> )
                }}/>
        </Tab.Navigator>
      );
  };