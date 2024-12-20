import React, { useContext, useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import {useAuth} from '../context/auth';
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
import Agenda from '../telas/Agenda';
import AgendaNew from '../telas/AgendaNew';

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
                elevation: 10,
                backgroundColor: '#971b18',
                borderTopColor: "transparent",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                height: 57,
                paddingBottom: 5,
                paddingTop:5,
            },
            tabBarActiveTintColor: '#fff'        
            }}
            >
            
            <Tab.Screen name="Home" 
                component={Home}
                options={{ tabBarLabel: 'início',
                         tabBarIcon: ({ color, size }) => (
                          <Entypo name="home" color={color} size={size} />
                         )
            }}
            />

            <Tab.Screen name="agendaNew" 
                component={AgendaNew}
                options={{ tabBarLabel: 'registrar',
                    tabBarIcon: ({ color, size }) => (
                     <AntDesign name="addfile" color={color} size={size} />
                    )
            }}
            />

            <Tab.Screen name="Agenda" 
                component={Agenda}
                options={{ tabBarLabel: 'agenda',
                    tabBarIcon: ({ color, size }) => (
                     <Entypo name="calendar" color={color} size={size} />
                    )
            }}
            />

            <Tab.Screen name="Sair" 
                component={ Logout }
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} /> )
            }}
            />

        </Tab.Navigator>
      );
  };