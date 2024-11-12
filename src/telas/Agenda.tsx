import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

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
        //console.log(formatDatas)
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
      <ScrollView>

        <View>
          {lista.map((contato, index) => (
            <View key={contato.id} style={styles.userItem}>
              <Text style={styles.userText}>{contato.id || '-'}</Text>
              <Text style={styles.userText}>{contato.name || '-'}</Text>
              <Text style={styles.userText}>{contato.telefone || '-'}</Text>
              <Text style={styles.userText}>{contato.email || '-'}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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

