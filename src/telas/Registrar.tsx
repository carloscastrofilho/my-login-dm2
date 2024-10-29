import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAuth } from '../context/auth';
import { ScrollView } from 'react-native';

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}
const Logo = require('../../assets/agenda.png');

const Registrar = ({ navigation }: NavigationProps) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const { CreateAccount } = useAuth();

  const onLoginClickRegistro = async () => {

    if (senha.trim() === '' || senha2.trim() === '') {
      alert("Obrigatorio informar a senha e confirmação, \n tente novamente!")
      return
    }

    if (senha !== senha2) {
      alert("Senha informada estão divergente, \n tente novamente!")
      return
    }

    const response = await CreateAccount(email, senha, telefone, nomeUsuario);

  }

  const onHandleClickLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        
        <View style={styles.logo}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.titulo}>Registro</Text>
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="nome do usuario"
            onChangeText={text => setNomeUsuario(text)}
            value={nomeUsuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone do usuario"
            onChangeText={text => setTelefone(text)}
            value={telefone}
          />
          <TextInput
            style={styles.input}
            placeholder="email do usuario"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe a Senha"
            onChangeText={text => setSenha(text)}
            value={senha}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a Senha"
            onChangeText={text => setSenha2(text)}
            value={senha2}
            secureTextEntry={true}
          />

          <View style={styles.textoContainer}>
            <Text>Já possui conta? {"   "}
              <Text style={styles.textoCadastro} onPress={onHandleClickLogin}>Volte a o Login
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={onLoginClickRegistro}>
            <Text style={styles.textoBotao}>Registrar</Text>
          </TouchableOpacity>
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
  },
  scroll: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  logo : {
    flex: 1,
    width: "100%",
    height: 200,    
    justifyContent: "center",
    alignContent: "center",
  },

  image: {
    marginTop: 25,
    width: "auto",
    height: 100,
    resizeMode: "contain",
  },

  titulo: {
    width: "auto",
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center",
  },

  content : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  subTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
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
    marginTop: 15,
    marginBottom: 30,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,

  },
  textoCadastro: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },

});


export default Registrar;