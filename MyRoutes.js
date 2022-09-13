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
import Formulario3 from "./Formulario3";
import Formulario4 from "./Formulario4";
import Formulario5 from "./Formulario5";
import Formulario6 from "./Formulario6";


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
  function GeneralEvaluation() {
    return (
      <Formulario3/>
    );
  }

  function PhysicalExploration() {
    return (
      <Formulario4/>
    );
  }

  function PatientCondition() {
    return (
      <Formulario5/>
    );
  }
  function PatientMove() {
    return (
      <Formulario6/>
    );
  }
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown:true,
          headerTintColor: '#900C3F',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Datos Generales') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Evaluación del paciente') {
              iconName = focused ? 'ios-pulse' : 'ios-pulse-outline';
            } else if (route.name === 'Evaluación Inicial') {
              iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
            } else if ( route.name == 'Exploración física'){
              iconName = focused ? 'body' : 'body-outline';
            } else if ( route.name == 'Condición del paciente'){
              iconName = focused ? 'happy' : 'sad';
            } else if ( route.name == 'Traslado del paciente'){
              iconName = focused ? 'bus' : 'bus-outline';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} type='ionicon'/>;
          },
          tabBarActiveTintColor: '#900C3F',
          tabBarInactiveTintColor: '#009392',
        })}
        >
          <Tab.Screen name="Datos Generales" component={GeneralData} />
          <Tab.Screen name="Evaluación del paciente" component={Evaluation}/>
          <Tab.Screen name="Evaluación Inicial" component={GeneralEvaluation}/>
          <Tab.Screen name="Exploración física" component={PhysicalExploration}/>
          <Tab.Screen name="Condición del paciente" component={PatientCondition}/>
          <Tab.Screen name="Traslado del paciente" component={PatientMove}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

/*options={{
                    tabBarIcon: ({ focused, color, size }) => (<Icon name='user' type='antdesign'></Icon>)
                }}
export default class MyRoutes extends Component {
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