import React, { Component, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../config/firebase';

 
const PlaceholderImage = require('../component/image/usuario.png');

const Login = ({navigation}) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const onLoginClick = () => {
    //
    signInWithEmailAndPassword( auth, nomeUsuario,  senha)
    .then( (userCredential)=> {
        const user =  userCredential.user;
        // console.log(user)        //
        // navigation.navigate('Home',
        //   { screen: 'Home',
        //     params: { user: {user}} }, )
        navigation.push('Login') ;
    } )
    .catch( (error)=> {
      const errocode = error.code ;
      const errormsg = error.message ;
      // tratamento das mensagens de erro pelo error.code      
      switch (errocode) {
        case 'auth/invalid-credential':
          alert( "Usuario ou Senha Invalida !") ; 
          return null
        case 'auth/missing-password':
          alert( "Usuario ou Senha em Branco !") ; 
          return null
        case 'auth/invalid-email':
          alert( "Usuario ou Senha em Branco !") ; 
          return null
        default:
          alert( "Ops, Desculpa algo aconteceu,\n tente novamente!") ; 
      }      
    } );    
  }

  const onPressRegister = () => {
    navigation.navigate('Registrar')
  }

  return (
    <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>Login Aula 20/05/24</Text>
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
      
      <View sytle={styles.textocontainer}>
          <Text>Não possui conta?
             <Text style={styles.textoCadastro} onPress={onPressRegister}>   Faça o cadastro
             </Text>
          </Text> 
      </View>

      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    gap:10,
  },
  image: {
    width:'80%',
    height:100,
    resizeMode:"contain",
  
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'orange',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerTexto:{
    width: '100%',
  },
  textoCadastro:{
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  textocontainer:{
    backgroundColor: 'red',
  }
});

export default Login;