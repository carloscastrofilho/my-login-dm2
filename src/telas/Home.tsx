import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAuth } from '../context/auth';
import { usePerson } from "../context/person";

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

const logo = require("../../assets/agenda.png");

const Home = ({ navigation }: NavigationProps) => {
  
  const { user } = useAuth();
  const { person } = usePerson();

  const onLoginClick = () => {
    // navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.titulo}>Principal</Text>
          <Text> email:  {person?.telefone}</Text>
      </View>

      <ScrollView style={styles.scroll}>

        <View>
                 
          <Text> nome: {user?.name}</Text>
          <Text> email:  {user?.email}</Text>   
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap: 10,
    marginTop: 25,
    padding: 15,
  },

  header: {
    display: "flex",
    width: "100%",    
    borderWidth: 1,
    backgroundColor: "#9b9999",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  scroll: {
    flex: 1,    
    padding: 16,
    width: "100%",
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  titulo: {    
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",   
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  botao: {
    backgroundColor: "black",
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;