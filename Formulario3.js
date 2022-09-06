import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView} from 'react-native';
import { Icon,Input, Image, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';

export default class Formulario3 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        evaluacion_inicial:'',
        ventilacion:'',
        circulacion:'',
        via_aerea:'',
        ruidos:'',
        calidad:'',
        reflejo_deglucion:'',
        piel:'',
        caracteristicas:'',
      }
      
    }
    render() {

      return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View>
          <View>
           <Text style={styles.sectionTitle}> Expediente Médico </Text>
          </View>
          <View style={styles.imagen}>
            <Image style={styles.imagen} source={require('../app/android/app/src/Imagenes/udg.jpeg')}/>
          </View>
          <View style = {styles.inputs}>
            
              <Input
              placeholder='Causa traumática (agente causal)'
              leftIcon={
                  <Icon
                  name='calendar'
                  size={24}
                  color='black'
                  type='font-awesome'
                  />
              }
              onChangeText={causa_traumatica => this.setState({causa_traumatica})}
              />
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>

    );
    }
}
const styles = StyleSheet.create({

    title:{
        fontSize: 30,
        textAlign: 'center',
    },
    inputs:{
      width: 300,
      marginTop: 15,
      marginLeft: 20,
    },
    imagen:{
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    marginTop: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'gray',
      textAlign: 'center',
      marginTop: 20,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    picke: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
})         