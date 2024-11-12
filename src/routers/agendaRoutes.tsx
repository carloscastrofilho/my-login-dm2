// AgendaStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Agenda from '../telas/Agenda';
import AgendaUpdate from '../telas/AgendaUpdate';
import AgendaNew from '../telas/AgendaNew';

const Stack = createNativeStackNavigator();

export default function AgendaRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="AgendaUpdate" component={AgendaUpdate} />
      <Stack.Screen name="AgendaNew" component={AgendaNew} />
    </Stack.Navigator>
  );
}