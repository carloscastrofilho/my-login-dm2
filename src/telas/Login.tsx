import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import {useAuth} from '../context/auth';
import { getAllUser, getByIdUser, newUserApp, updateUser } from '../services/realtime';
interface NavigationProps {
  navigation:NavigationProp<ParamListBase>;
}

const PlaceholderImage = require('../component/image/usuario.png');

const Login = ({ navigation }: NavigationProps ) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const { SignIn } = useAuth(); 

  const onLoginClick = () => {
    SignIn(nomeUsuario, senha); 
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
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>{process.env.EXPO_PUBLIC_AULA}</Text>
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

      <TouchableOpacity style={styles.botao} 
         onPress={onNewUser}>
        <Text style={styles.textoBotao}>criar usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} 
         onPress={onGetAllUser}>
        <Text style={styles.textoBotao}>consultar usuarios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} 
         onPress={onGetById}>
        <Text style={styles.textoBotao}>Consultar por Id</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} 
         onPress={onUpdateUser}>
        <Text style={styles.textoBotao}>Alterar por Id</Text>
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
  subTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
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
    backgroundColor: 'blue',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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