import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo,Ionicons } from '@expo/vector-icons';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
const Tab = createBottomTabNavigator();
interface SairProgramaProps { navigation: NavigationProp<ParamListBase>; }  

const SairPrograma: React.FC<SairProgramaProps> = ({ navigation }) => {
    return null; // Como não queremos renderizar nada, retorna null
  };

export default function AuthRouters() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: { backgroundColor: '#000',
                borderTopColor: "transparent", },
            tabBarActiveTintColor: '#fff',           
        }}>
            <Tab.Screen name="Home" 
                component={Home}
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} /> )
            }}/>
            <Tab.Screen name="Registro" component={Registrar}/>        
            <Tab.Screen name="Sair" component={SairPrograma}
                options={{ tabBarLabel: 'início',
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} /> )
            }}/>
        </Tab.Navigator>
    );
};