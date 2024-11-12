import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { personNew, personUpdate } from '../services/personService';
import { Person } from '../context/person';
import { useRoute } from '@react-navigation/native';

interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}
const Logo = require('../../assets/agenda.png');

const AgendaUpdate = ({ navigation }: NavigationProps) => {

  const route = useRoute();
  const { contato } = route.params as { contato: Person };
  
  const [nomeUsuario, setNomeUsuario] = useState(contato?.name || '');
  const [telefone, setTelefone] = useState(contato?.telefone || '');
  const [email, setEmail] = useState(contato?.email || '');
  console.log(contato);
  const onLoginClickRegistro = async () => {
    const data : Person = {
      name: nomeUsuario,
      email: email,      
      telefone: telefone,
      observacao: contato?.observacao,
      avatar: contato?.avatar,
      uuidauth: contato?.uuidauth,
    }
    const response = await personUpdate(contato.id,data);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>        
        <View style={styles.logo}>
          <Image source={Logo} style={styles.image} />
          <Text style={styles.titulo}>Update Agenda</Text>
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
            <Text style={styles.textoBotao}>Atualizar</Text>
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

export default AgendaUpdate;