import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useAuth } from '../context/auth';
import { ScrollView } from 'react-native';
import { personNew } from '../services/personService';
import { Person } from '../context/person';

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}
const Logo = require('../../assets/agenda.png');

const AgendaNew = ({ navigation }: NavigationProps) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAuth();

  const onLoginClickRegistro = async () => {
    const data : Person = {
      name: nomeUsuario,
      email: email,
      uuidauth: "",
      telefone: telefone,
      observacao: "",
      avatar: ""
    }
    const response = await personNew(data);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>        
        <View style={styles.logo}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.titulo}>Nova Agenda</Text>
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

export default AgendaNew;