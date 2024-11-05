import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { db } from "../services/database/firebase";
import { onValue, ref } from "firebase/database";
import { Person } from '../context/person';

interface NavigationProps {
    navigation: NavigationProp<ParamListBase>;
}

const Agenda = ({ navigation }: NavigationProps) => {
    const [lista, setLista] = useState<Person[]>([]); // Corrigido para lista de Person

    useEffect(() => {
        const usersRef = ref(db, "person");
    
        const unsubscribe = onValue(usersRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const formatDatas = Object.entries(data).map(([id, value]) => ({
              id,
              ...(value as Person), // Tipagem correta para os valores
            }));
            setLista(formatDatas);
          } else {
            setLista([]);
          }
        });
    
        return () => unsubscribe(); // Limpa o listener ao desmontar o componente
    }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Agenda de Contatos</Text>
        {lista.map((contato, index) => (
          <View key={contato.uuidauth} style={styles.userItem}>
            <Text style={styles.userText}>{contato.name || 'Nome não disponível'}</Text>
            <Text style={styles.userText}>{contato.telefone || 'Nome não disponível'}</Text>
          </View>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,
    },
    userItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    userText: {
      fontSize: 16,
    },
});

export default Agenda;

