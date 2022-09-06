/*import Formulario1 from "./Formulario1.js";
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
}*/
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import LOGIN from "./src/Login";
import MAIN from "./src/Main";
import MY_REPORTS from "./src/MyReports";
import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";

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

  /*function Evaluation() {
    return (
      <Formulario2/>
    );
  }*/
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        
        >
          <Tab.Screen name="Datos Generales" component={GeneralData} options={{
                    tabBarIcon: () => (<Icon name='user' type='antdesign'></Icon>)
                }}/>
          <Tab.Screen name="Evaluación del paciente" component={Evaluation} options={{
                    tabBarIcon: () => (<Icon name='meh' type='antdesign'></Icon>)
                }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

/*export default class MyRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Formulario" component={Formulario2} />
                <Stack.Screen name="Main" component={MAIN} />
                <Stack.Screen name="MyReports" component={MY_REPORTS} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}*/