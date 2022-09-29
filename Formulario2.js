import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView} from 'react-native';
import { Icon,Input, Image, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'

export default class Formulario2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        causa_traumatica:'',
        mecanismo_lesion:'',
        causa_clinica:'',
        causa_especifica:'',
        producto:'',
        sexo:'',
        apgar_un_min:'',
        apgar_cinco_min:'',
        apgar_diez_min:'',
        gesta:'',
        para:'',
        cesarea:'',
        aborto:'',
        fecha_ultima_menstuacion:'',
        fecha_probable_parto:'',
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
            <Text>Causa traumática (agente causal)</Text>
            <Picker selectedValue = {this.state.causa_traumatica} onValueChange = {causa_traumatica => this.setState({causa_traumatica})}>
              <Picker.Item label = "Arma" value = "Arma" />
              <Picker.Item label = "Automotor" value = "Automotor" />
              <Picker.Item label = "Maquinaria" value = "Maquinaria" />
              <Picker.Item label = "Bicicleta" value = "Bicicleta" />
              <Picker.Item label = "Herramienta" value = "Herramienta" />
              <Picker.Item label = "Electricidad" value = "Electricidad" />
              <Picker.Item label = "Fuego" value = "Fuego" />
              <Picker.Item label = "Sustancia caliente" value = "Sustancia caliente" />
              <Picker.Item label = "Producto biológico" value = "Producto biológico" />
              <Picker.Item label = "Sustancia tóxica" value = "Sustancia tóxica" />
              <Picker.Item label = "Juguete" value = "Juguete" />
              <Picker.Item label = "Explosión" value = "Explosión" />
              <Picker.Item label = "Ser humano" value = "Ser humano" />
              <Picker.Item label = "Animal" value = "Animal" />
              <Picker.Item label = "Otro" value = "Otro" />
            </Picker>
            <Text>En caso de otra causa traumática, indicar cual:</Text>
            <Input
              placeholder='Otro'
              leftIcon={
                  <Icon
                  name='user-injured'
                  size={24}
                  color='#009392'
                  type='font-awesome-5'
                  />
              }
              onChangeText={causa_traumatica => this.setState({causa_traumatica})}
              />
          </View>
          <View style = {styles.inputs}>
            
              <Input
              placeholder='Mecanismo de lesión'
              leftIcon={
                  <Icon
                  name='user-injured'
                  size={24}
                  color='#009392'
                  type='font-awesome-5'
                  />
              }
              onChangeText={mecanismo_lesion => this.setState({mecanismo_lesion})}
              />
          </View>
          <View style = {styles.inputs}>
            <Text>Causa clínica (origen probable)</Text>
            <Picker selectedValue = {this.state.causa_clinica} onValueChange = {causa_clinica => this.setState({causa_clinica})}>
              <Picker.Item label = "Neurológica" value = "Neurológica" />
              <Picker.Item label = "Cardiovascular" value = "Cardiovascular" />
              <Picker.Item label = "Respiratorio" value = "Respiratorio" />
              <Picker.Item label = "Metabólico" value = "Metabólico" />
              <Picker.Item label = "Digestiva" value = "Digestiva" />
              <Picker.Item label = "Urogenital" value = "Urogenital" />
              <Picker.Item label = "Gineco obstétrica" value = "Gineco obstétrica" />
              <Picker.Item label = "Psico emotiva" value = "Psico emotiva" />
              <Picker.Item label = "Músculo esquelético" value = "Músculo esquelético" />
              <Picker.Item label = "Infecciosa" value = "nfecciosa" />
              <Picker.Item label = "Oncológico" value = "Oncológico" />
              <Picker.Item label = "Otro" value = "Otro" />
            </Picker>
            <Text>En caso de otra causa clínica, indicar cual:</Text>
            <Input
              placeholder='Otro'
              leftIcon={
                  <Icon
                  name='hospital-o'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={causa_clinica => this.setState({causa_clinica})}
              />
          </View>
          <View style = {styles.inputs}>
            
              <Input
              placeholder='Causa específica'
              leftIcon={
                  <Icon
                  name='medkit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={causa_especifica => this.setState({causa_especifica})}
              />
          </View>
          <View>
            <Text>Parto</Text>
            <View style = {styles.inputs}>
              <Text>Producto</Text>
              <Picker selectedValue = {this.state.producto} onValueChange = {producto => this.setState({producto})}>
                <Picker.Item label = "No aplica" value = "No aplica" />
                <Picker.Item label = "Vivo" value = "Vivo" />
                <Picker.Item label = "Muerto" value = "Muerto" />
              </Picker>
            </View>
            <View style = {styles.inputs}>
              <Text>Sexo</Text>
              <Picker selectedValue = {this.state.sexo} onValueChange = {sexo => this.setState({sexo})}>
                <Picker.Item label = "No aplica" value = "No aplica" />
                <Picker.Item label = "Masculino" value = "M" />
                <Picker.Item label = "Femenino" value = "F" />
              </Picker>
            </View>
            <View style = {styles.inputs}>
              <Text>Apgar</Text>
              <View>
                <Image style={styles.imagenapgar} source={require('../app/android/app/src/Imagenes/apgar.jpeg')}/>
              </View>
              <View style = {styles.inputs}>
                  <Input
                  placeholder='1 min'
                  keyboardType='number-pad'
                  leftIcon={
                      <Icon
                      name='clockcircleo'
                      size={24}
                      color='#009392'
                      type='ant-design'
                      />
                  }
                  onChangeText={apgar_un_min => this.setState({apgar_un_min})}
                  />
              </View>
              <View style = {styles.inputs}>
                  <Input
                  placeholder='5 min'
                  keyboardType='number-pad'
                  leftIcon={
                      <Icon
                      name='clockcircleo'
                      size={24}
                      color='#009392'
                      type='ant-design'
                      />
                  }
                  onChangeText={apgar_cinco_min => this.setState({apgar_cinco_min})}
                  />
              </View>
              <View style = {styles.inputs}>
                  <Input
                  placeholder='10 min'
                  keyboardType='number-pad'
                  leftIcon={
                      <Icon
                      name='clockcircleo'
                      size={24}
                      color='#009392'
                      type='ant-design'
                      />
                  }
                  onChangeText={apgar_diez_min => this.setState({apgar_diez_min})}
                  />
              </View>
            </View>
            <View style = {styles.inputs}>
              
              <Input
              placeholder='Gesta'
              leftIcon={
                  <Icon
                  name='view-list'
                  size={24}
                  color='#009392'
                  type='materialcommunityicons'
                  />
              }
              onChangeText={gesta => this.setState({gesta})}
              />
            </View>
            <View style = {styles.inputs}>
                
                <Input
                placeholder='Para'
                leftIcon={
                    <Icon
                    name='pregnant-woman'
                    size={24}
                    color='#009392'
                    type='materialicons'
                    />
                }
                onChangeText={para => this.setState({para})}
                />
            </View>
            <View style = {styles.inputs}>
                
                <Input
                placeholder='Cesarea'
                leftIcon={
                    <Icon
                    name='pregnant-woman'
                    size={24}
                    color='#009392'
                    type='materialicons'
                    />
                }
                onChangeText={cesarea => this.setState({cesarea})}
                />
            </View>
            <View style = {styles.inputs}>
                
                <Input
                placeholder='Aborto'
                leftIcon={
                    <Icon
                    name='closecircleo'
                    size={24}
                    color='#009392'
                    type='ant-design'
                    />
                }
                onChangeText={aborto => this.setState({aborto})}
                />
            </View>
            <View style = {styles.inputs}>
                
                <Input
                placeholder='Fecha ultima menstruación'
                leftIcon={
                    <Icon
                    name='calendar'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={ fecha_ultima_menstuacion => this.setState({fecha_ultima_menstuacion})}
                />
            </View>
            <View style = {styles.inputs}>
                
                <Input
                placeholder='Fecha probable de parto'
                leftIcon={
                    <Icon
                    name='calendar'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={fecha_probable_parto => this.setState({fecha_probable_parto})}
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
      marginBottom: 20,
    },
    imagen1:{
        width:300,
        height:300,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'contain',
    },
    imagenapgar:{
      width:500,
      height:500,
      justifyContent:'center',
      alignItems:'center',
      alignSelf: 'center',
      resizeMode: 'contain',
      flex: 1,
      
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