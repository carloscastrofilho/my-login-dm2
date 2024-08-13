import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PlaceholderImage = require("../component/image/soldado.png");

const Home = ({ navigation, route }) => {
  // const userLogado = route.params.user ;
  //console.log(route.params)

  const nome = route.params?.user.displayName ;
  const email = route.params?.user.email ;
  const emailVerified = route.params?.user.emailVerified ;
  
  const phoneNumber = route.params?.user.phoneNumber ;
  const photoURL = route.params?.user.photoURL ;
  const uid = route.params?.user.uid ;
  
  const onLoginClick = () => {
    navigation.navigate("Ficha");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} style={styles.image} />
        <Text style={styles.titulo}>Principal</Text>
      </View>

      <View>
          <Text> apelido: {nome}</Text>
          <Text> email:  {email}</Text>          
          <Text> telefone: {phoneNumber}</Text>
          <Text> foto url: {photoURL}</Text>
          <Text> uuid: {uid}</Text>
          <Text> email verificado: {emailVerified}</Text>
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
    backgroundColor: "#fff",
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