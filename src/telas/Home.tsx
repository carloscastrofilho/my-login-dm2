import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AuthContext from '../context/auth';
interface NavigationProps {
  navigation:NavigationProp<ParamListBase>;
}

const PlaceholderImage = require("../component/image/soldado.png");

const Home = ({ navigation }:NavigationProps) => {
  const { user } = useContext(AuthContext); 
  // fazer a desestruturação do objeto user
  const { name, email } = user;

  const onLoginClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.titulo}>Principal</Text>
      </View>

      <View>
          <Text> nome: {name}</Text>
          <Text> email:  {email}</Text> 
      <View>

      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
            <Text style={styles.textoBotao}>Ficha Usuario</Text>
      </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#9f9",
  },
  image: {
    width: "80%",
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
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