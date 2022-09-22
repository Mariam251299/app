import React, { Component,useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, FlatList, TouchableHighlight,AppRegistry} from 'react-native';
import { Icon,Input, Image, Button} from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import MultiSelect from 'react-native-element-dropdown';
import Select from "react-select";
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import SignatureCapture from 'react-native-signature-capture';
import LinearGradient from 'react-native-linear-gradient';


export default class Formulario6 extends Component {
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
      //const navigation = useNavigation();
      const goScreen = () => {
        let _this = this;
        this.props.navigation.navigate('Signature');
      }
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
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{alignItems:"center",justifyContent:"center"}}>Firme aqui </Text>
                    <SignatureCapture 
                      style={[{flex:1},styles.signature]}
                      ref="sign"
                      onSaveEvent={this._onSaveEvent}
                      onDragEvent={this._onDragEvent}
                      saveImageFileInExtStorage={false}
                      showNativeButtons={false}
                      showTitleLabel={true}
                      backgroundColor="white"
                      strokeColor="black"
                      minStrokeWidth={4}
                      maxStrokeWidth={15}
                      viewMode={"portrait"}///>
                      />
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <TouchableHighlight style={styles.buttonStyle}
                          onPress={() => { this.saveSign() } } >
                          <Text style={{color: 'white'}}>Guardar</Text>
                      </TouchableHighlight>
                      <TouchableHighlight style={styles.buttonStyle}
                          onPress={() => { this.resetSign() } } >
                          <Text style={{color: 'white'}}>Resetear</Text>
                      </TouchableHighlight>
                    </View>
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
                        keyboardType='number-pad'
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
                <LinearGradient style={{ width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'#900C3F',borderRadius:20}} start={{x:0, y:0}} end={{x:1, y:1}} colors={['#900C3F', 'darkred']}>
                  <View style={{ marginTop:16, width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'transparent',borderRadius:20}}>
                    
                    <TouchableOpacity
                      icon={{
                        type:'font-awesome',
                        name:"check-square",
                        size:15,
                        color:"white",
                      }}
                      onPress={goScreen}
                    >
                      <Text style={{textAlign:'center',fontSize:17,color:'white', justifyContent:'center',alignSelf:'center',fontWeight:'bold'}}>Firmar</Text> 
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
            </View>

        </ScrollView>
      </SafeAreaView>
      
    );
    }
    saveSign() {
      this.refs["sign"].saveImage();
      Alert.alert(
        "Guardar",
        "Guardado con Exito",
        [
          {
            text: "Aceptar",
            style: 'cancel',
          }
        ]
       ); 
      }

      resetSign() {
          this.refs["sign"].resetImage();
      }

      _onSaveEvent(result) {
          //result.encoded - for the base64 encoded png
          //result.pathName - for the file path name
          console.log(result);
      }
      _onDragEvent() {
          // This callback will be called when the user enters signature
          console.log("dragged");
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
    },
    signature: {
      flex: 1,
      borderColor: '#000033',
      borderWidth: 100,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#900C3F",
        margin: 10,
        borderRadius: 15,
    }
})    
AppRegistry.registerComponent('Formulario6', () => Formulario6);