import Formulario1 from "./Formulario1.js";
import Formulario2 from "./Formulario2.js";
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function GeneralData() {
  return (
    <Formulario1/>
  );
}

function Evaluation() {
  return (
    <Formulario2/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Datos Generales" component={GeneralData} />
        <Tab.Screen name="Evaluación del paciente" component={Evaluation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}