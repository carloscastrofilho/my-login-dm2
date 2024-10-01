import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import {useAuth} from '../context/auth';
import { getAllUser, getByIdUser, newUserApp, updateUser } from '../services/realtime';
interface NavigationProps {
  navigation:NavigationProp<ParamListBase>;
}

const PlaceholderImage = require('../../assets/agenda.png');

const Login = ({ navigation }: NavigationProps ) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const { SignIn } = useAuth(); 

  const onLoginClick = async () => {
   await SignIn(nomeUsuario, senha);     
 }

  const onPressRegister = () => {
    navigation.navigate('Registrar')
  }

  const onGetAllUser = async ()=>{
    const lista = getAllUser()
  
  }
  const onNewUser = async () =>{
      const newuser =  newUserApp()
  }

  const onGetById = async () =>{
    const uuid = "-O7ZXIe4AN_r6_3x_MSQ"
    const newuser =  getByIdUser(uuid);
}

  const onUpdateUser = async () =>{
    const uuid = "-O7ZXIe4AN_r6_3x_MSQ"
    const usuario =  {
      username: "teste gmail",
      useremail: "teste@gmail.com",
      userimageUrl: "",
      telefone: "16-9999-3444"
  }
    const newuser =  updateUser(uuid,usuario);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
              
      <View style={styles.contentLogo }>
          <Image source={PlaceholderImage} style={styles.image} />
          <Text style={styles.titulo}>{process.env.EXPO_PUBLIC_AULA}</Text>
      </View>

      <View style={styles.content}>

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      
      <View style={styles.textoContainer}>
          <Text>Não possui conta? {'  '}
             <Text style={styles.textoCadastro} 
              onPress={onPressRegister}>
                Faça o cadastro!
             </Text>
          </Text> 
      </View>

      <TouchableOpacity style={styles.botao} 
         onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      </View>
      
      </ScrollView>
  </View>
   
    
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#c1bdf4",
    gap:10,
    marginTop: 36,
  },

  scroll: {
    flex: 1,
    marginTop: 45,
    width: "100%",
    padding: 15,
  },

  contentLogo : {
    flex: 1,
    width: "auto",
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 160,
    height: 160,
    resizeMode:"contain",
    marginBottom: 20,
  },
  
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },

  content:{
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap:10,
    marginTop: 30,
  },

  input: {
    width: '85%',
    height: 60,
    borderWidth: 1,
    borderColor: '#071d10',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  botao: {
    backgroundColor: '#021d0c',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textoContainer:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,  
  },
  textoCadastro:{
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default Login;