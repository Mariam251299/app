import React, { Component,useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, FlatList} from 'react-native';
import { Icon,Input, Image, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from 'react-native-element-dropdown';
import Select from "react-select";
import DropDownPicker from 'react-native-dropdown-picker';

const options = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" }
];


const items = [{
  id: 1,
  name: 'Consciente'
},
{
  id: 2,
  name: 'Respuesta a estimulo verbal'
},
{
  id: 3,
  name: 'Respuesta a estimulo doloroso'
},
{
  id: 4,
  name: 'Inconsciente'
},
];
export default class Formulario3 extends Component {
  state = {
    selectedOption: null
  };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      // Option selected: { value: "rojo", label: "rojo" }
      console.log(`Option selected:`, selectedOption);
    };

    constructor(props) {
      super(props);
      this.state = {
        evaluacion_inicial:'',
        ventilacion:'',
        circulacion:'',
        via_aerea:'',
        ruidos:'',
        lado:'',
        parte:'',
        calidad:'',
        reflejo_deglucion:'',
        piel:'',
        caracteristicas:'',
        selectOptionEvaluation:[],
        selectedOption:[],
        text:'',
      }
      
    }
    onSelectedItemsChange = selectOptionEvaluation => {
      this.setState({ selectOptionEvaluation });
    };
    render() {
      const { selectOptionEvaluation } = this.state;
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
              {/* <View style = {styles.inputs}>
                <Select
                  isMulti
                  options={options}
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  closeMenuOnSelect={false}
                />
                </View>*/}
              <View style = {styles.inputs}>
                <Text>Evaluación inicial</Text>
                  <Picker selectedValue = {this.state.evaluacion_inicial} onValueChange = {evaluacion_inicial => this.setState({evaluacion_inicial})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Consciente" value = "Consciente" />
                    <Picker.Item label = "Respuesta a estímulo verbal" value = "Respuesta a estímulo verbal" />
                    <Picker.Item label = "Respuesta a estímulo doloroso" value = "Respuesta a estímulo doloroso" />
                    <Picker.Item label = "Inconsciente" value = "Inconsciente"/>
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Ventilación</Text>
                  <Picker selectedValue = {this.state.ventilacion} onValueChange = {ventilacion => this.setState({ventilacion})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Automatismo regular" value = "Automatismo regular" />
                    <Picker.Item label = "Automatismo irregular" value = "Automatismo irregular" />
                    <Picker.Item label = "Ventilación rápida" value = "Ventilación rápida" />
                    <Picker.Item label = "Ventilación superficial" value = "Ventilación superficial"/>
                    <Picker.Item label = "Apnea" value = "Apnea"/>
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Circulación</Text>
                  <Picker selectedValue = {this.state.circulacion} onValueChange = {circulacion => this.setState({circulacion})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Carotideo" value = "Carotideo" />
                    <Picker.Item label = "Radial" value = "Radial" />
                    <Picker.Item label = "Paro cardiorespiratorio" value = "Paro cardiorespiratorio" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Vía aérea</Text>
                  <Picker selectedValue = {this.state.via_aerea} onValueChange = {via_aerea => this.setState({via_aerea})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Permeable" value = "Permeable" />
                    <Picker.Item label = "Comprometida" value = "Comprometida" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Ruidos respiratorios</Text>
                  <Picker selectedValue = {this.state.ruidos} onValueChange = {ruidos => this.setState({ruidos})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Ruidos respiratorios normales" value = "Ruidos respiratorios normales" />
                    <Picker.Item label = "Ruidos respiratorios disminuidos" value = "Ruidos respiratorios disminuidos" />
                    <Picker.Item label = "Ruidos respiratorios ausentes" value = "Ruidos respiratorios ausentes" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Lado del pulmón</Text>
                  <Picker selectedValue = {this.state.lado} onValueChange = {lado => this.setState({lado})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Derecho" value = "Derecho" />
                    <Picker.Item label = "Izquierdo" value = "Izquierdo" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Parte del pulmón</Text>
                  <Picker selectedValue = {this.state.parte} onValueChange = {parte => this.setState({parte})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Apical" value = "Apical" />
                    <Picker.Item label = "Base" value = "Base" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Parte del pulmón</Text>
                  <Picker selectedValue = {this.state.parte} onValueChange = {parte => this.setState({parte})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Apical" value = "Apical" />
                    <Picker.Item label = "Base" value = "Base" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Calidad</Text>
                  <Picker selectedValue = {this.state.calidad} onValueChange = {calidad => this.setState({calidad})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Rápido" value = "Rápido" />
                    <Picker.Item label = "Lento" value = "Lento" />
                    <Picker.Item label = "Rítmico" value = "Rítmico" />
                    <Picker.Item label = "Arrítmico" value = "Arrítmico" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Reflejo deglución</Text>
                  <Picker selectedValue = {this.state.reflejo_deglucion} onValueChange = {reflejo_deglucion => this.setState({reflejo_deglucion})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Ausente" value = "Ausente" />
                    <Picker.Item label = "Presente" value = "Presente" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Piel</Text>
                  <Picker selectedValue = {this.state.piel} onValueChange = {piel => this.setState({piel})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Normal" value = "Normal" />
                    <Picker.Item label = "Pálida" value = "Pálida" />
                    <Picker.Item label = "Cianótica" value = "Cianótica" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Características</Text>
                  <Picker selectedValue = {this.state.caracteristicas} onValueChange = {caracteristicas => this.setState({caracteristicas})} styles= {{color: 'black'}}>
                    <Picker.Item label = "Eutérmica" value = "Eutérmica" />
                    <Picker.Item label = "Caliente" value = "Caliente" />
                    <Picker.Item label = "Fría" value = "Fría" />
                    <Picker.Item label = "Diaforesis" value = "Diaforesis" />
                  </Picker>
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
    width:120,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: '#900C3F',
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
      marginHorizontal: 5,
    },
    picke: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
})         