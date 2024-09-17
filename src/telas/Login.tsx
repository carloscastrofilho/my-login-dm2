import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AuthContext from '../context/auth';
interface NavigationProps {
  navigation:NavigationProp<ParamListBase>;
}

const PlaceholderImage = require('../component/image/usuario.png');

const Login = ({ navigation }: NavigationProps ) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const { SignIn } = useContext(AuthContext); 

  const onLoginClick = () => {
    SignIn(nomeUsuario, senha); 
 }

  const onPressRegister = () => {
    navigation.navigate('Registrar')
  }

  return (
    <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>Login Aula 17/09/24</Text>
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