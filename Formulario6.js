import React, { Component,useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, FlatList} from 'react-native';
import { Icon,Input, Image, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from 'react-native-element-dropdown';
import Select from "react-select";
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';


export default class Formulario5 extends Component {
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
        institucion:'',
        nombre_firma_paciente:'',
        nombre_firma_testigo:'',
        observaciones:'',
        dependencia:'',
        num_unidades:'',
        encargado_y_oficiales:'',
        pertenencias:'',
        receptor_pertenencias:'',
        nombre_completo_paciente:'',
        nombre_completo_medico:'',
      }
      
    }
    onSelectedItemsChange = selectOptionEvaluation => {
      this.setState({ selectOptionEvaluation });
    };
    render() {
      const state = this.state;
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
                <View style = {styles.inputs}>
                    <Input
                    placeholder='Institución a la que se traslada el paciente'
                    leftIcon={
                        <Icon
                        name='hospital-o'
                        size={24}
                        color='#009392'
                        type='font-awesome'
                        />
                    }
                    onChangeText={institucion => this.setState({institucion})}
                    />
                </View>          
                <View style = {styles.inputs}>
                    <Input
                    placeholder='Nombre/firma del paciente'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='#009392'
                        type='font-awesome'
                        />
                    }
                    onChangeText={nombre_firma_paciente => this.setState({nombre_firma_paciente})}
                    />
                </View>     
                <View style = {styles.inputs}>
                    <Input
                    placeholder='Nombre/firma del testigo'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='#009392'
                        type='font-awesome'
                        />
                    }
                    onChangeText={nombre_firma_testigo => this.setState({nombre_firma_testigo})}
                    />
                </View>     
                <View style = {styles.inputs}>
                    <Input
                    placeholder='Observaciones'
                    leftIcon={
                        <Icon
                        name='pencil'
                        size={24}
                        color='#009392'
                        type='font-awesome'
                        />
                    }
                    onChangeText={observaciones => this.setState({observaciones})}
                    />
                </View>     
                <View>
                    <Text>Dependencias que atendieron al paciente</Text>
                    <View style = {styles.inputs}>
                        <Input
                        placeholder='Dependencia'
                        leftIcon={
                            <Icon
                            name='building-o'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={dependencia => this.setState({dependencia})}
                        />
                    </View>     
                    <View style = {styles.inputs}>
                        <Input
                        placeholder='Numero de unidades'
                        leftIcon={
                            <Icon
                            name='ambulance'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={num_unidades => this.setState({num_unidades})}
                        />
                    </View>      
                    <View style = {styles.inputs}>
                        <Input
                        placeholder='Nombre del encargado y/o oficiales'
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={encargado_y_oficiales => this.setState({encargado_y_oficiales})}
                        />
                    </View>     
                    <View style = {styles.inputs}>
                        <Input
                        placeholder='Pertenencias'
                        leftIcon={
                            <Icon
                            name='shopping-bag'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={pertenencias => this.setState({pertenencias})}
                        />
                    </View>     
                    <View style = {styles.inputs}>
                        <Input
                        placeholder='Nombre de quien recibe las pertenencias'
                        leftIcon={
                            <Icon
                            name='pencil'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={receptor_pertenencias => this.setState({receptor_pertenencias})}
                        />
                    </View>     
                    <View style = {styles.inputs}>
                        <Text>Entrega paciente</Text>
                        <Input
                        placeholder='Nombre completo'
                        leftIcon={
                            <Icon
                            name='pencil'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={nombre_completo_paciente => this.setState({nombre_completo_paciente})}
                        />
                    </View>     
                    <View style = {styles.inputs}>
                        <Text>Médico recibe</Text>
                        <Input
                        placeholder='Nombre completo'
                        leftIcon={
                            <Icon
                            name='pencil'
                            size={24}
                            color='#009392'
                            type='font-awesome'
                            />
                        }
                        onChangeText={nombre_completo_medico => this.setState({nombre_completo_medico})}
                        />
                    </View>     
                </View>

            </View>

        </ScrollView>
      </SafeAreaView>
      
    );
    }
}
const styles = StyleSheet.create({
    container1: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#009392' },
    text: { margin: 6, color: 'black' },
    title:{
        fontSize: 30,
        textAlign: 'center',
    },
    inputs:{
      width: 500,
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
    imagen1:{
      width:300,
      height:300,
      justifyContent:'center',
      alignItems:'flex-start',
      alignSelf: 'center',
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