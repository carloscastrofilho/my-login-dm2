import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AuthContext from '../context/auth';

interface RouteProps {
  displayName : string;
  email: string;
  emailVerified: string;
  phoneNumber : string;
  photoURL : string;
  uid: string;
}
interface NavigationProps {
  navigation:NavigationProp<ParamListBase>;
}

const PlaceholderImage = require("../component/image/soldado.png");

const Home = ({ navigation }:NavigationProps) => {
  const { signed , user} = useContext(AuthContext); 

  // const userLogado = route.params.user ;
  //console.log(route.params)
  

  // const nome = route.displayName ;
  // const email = route.email ;
  // const emailVerified = route.emailVerified ;
  
  // const phoneNumber = route.phoneNumber ;
  // const photoURL = route.photoURL ;
  // const uid = route.uid ;
  
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
          {/* <Text> apelido: {nome}</Text>
          <Text> email:  {email}</Text>          
          <Text> telefone: {phoneNumber}</Text>
          <Text> foto url: {photoURL}</Text>
          <Text> uuid: {uid}</Text>
          <Text> email verificado: {emailVerified}</Text> */}
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