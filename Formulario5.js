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
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

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
      const d = new Date();
      this.state = {
        critico:'No',
        estable:'No',
        color:'No aplica',
        glasgow:'',
        via_aerea:'No aplica',
        control_cervical:'No aplica',
        asistencia_ventilatoria:'No aplica',
        descompresion_pleural:'No',
        lado_descompresion_pleural:'No aplica',
        asistencia_ventilatoria:'No aplica',
        frec:'',
        vol:'',
        oxigenoterapia:'No aplica',
        ltsxmin_oxigenoterapia:'',
        control_hemorragias:'No aplica',
        vias_venosas:'No aplica',
        vias_venosas_numero:'',
        tipo_soluciones:'No aplica',
        cantidad:'',
        infusiones:'',
        hora:addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()),
        medicamento:'',
        dosis:'',
        via_admin:'',
        terapia_electrica:'',
        rcp:'No aplica',
        procedimiento:'No aplica',
      }
      
    }
    onSelectedItemsChange = selectOptionEvaluation => {
      this.setState({ selectOptionEvaluation });
    };
    render() {
      const state = this.state;
      const { selectOptionEvaluation } = this.state;

      const escribe= async ()=>{
        var tempescribe = this.state.critico+","+this.state.estable+","+this.state.color+","+this.state.glasgow+","+this.state.via_aerea
        +","+this.state.control_cervical+","+this.state.asistencia_ventilatoria+","+this.state.descompresion_pleural+","+this.state.lado_descompresion_pleural
        +","+this.state.asistencia_ventilatoria+","+this.state.frec+","+this.state.vol+","+this.state.oxigenoterapia+","+this.state.ltsxmin_oxigenoterapia
        +","+this.state.control_hemorragias+","+this.state.vias_venosas+","+this.state.vias_venosas_numero+","+this.state.tipo_soluciones
        +","+this.state.cantidad+","+this.state.infusiones+","+this.state.hora+","+this.state.medicamento+","+this.state.dosis+","+this.state.via_admin
        +","+this.state.terapia_electrica+","+this.state.rcp+","+this.state.procedimiento;
      try {
        await AsyncStorage.setItem('@formulario5', tempescribe)
      } catch (e) {
        // saving error
      }

      }
      const lee = async() => {
        try {
          const value = await AsyncStorage.getItem('@formulario5')
          if(value !== null) {
            // value previously stored
            console.log(value);
      
          }
        } catch(e) {
          // error reading value
        }
      }

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
              <View>
                <Text>Condición del paciente</Text>
                <View style = {styles.inputs}>
                  <Text>Crítico</Text>
                    <Picker selectedValue = {this.state.critico} onValueChange = {critico => this.setState({critico})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No" value = "No" />
                      <Picker.Item label = "Si" value = "Si" />
                      
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Estable</Text>
                    <Picker selectedValue = {this.state.estable} onValueChange = {estable => this.setState({estable})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No" value = "No" />
                      <Picker.Item label = "Si" value = "Si" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Color del paciente</Text>
                    <Picker selectedValue = {this.state.color} onValueChange = {color => this.setState({color})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Rojo" value = "Rojo" />
                      <Picker.Item label = "Amarillo" value = "Amarillo" />
                      <Picker.Item label = "Verde" value = "Verde" />
                      <Picker.Item label = "Negra" value = "Negra" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Glasgow'
                  leftIcon={
                      <Icon
                      name='body'
                      size={24}
                      color='#009392'
                      type='ionicon'
                      />
                  }
                  onChangeText={glasgow => this.setState({glasgow})}
                  />
                </View>
                <View style = {styles.inputs}>
                <Text>Vía aérea</Text>
                  <Picker selectedValue = {this.state.via_aerea} onValueChange = {via_aerea => this.setState({via_aerea})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No aplica" value = "No aplica" />
                    <Picker.Item label = "Aspiración" value = "Aspiración" />
                    <Picker.Item label = "Canula orofaríngea" value = "Canula orofaríngea" />
                    <Picker.Item label = "Canula nasofaríngea" value = "Canula nasofaríngea" />
                    <Picker.Item label = "Intubación endotraqueal" value = "Intubación endotraqueal" />
                    <Picker.Item label = "Mascarilla laríngea" value = "Mascarilla laríngea" />
                    <Picker.Item label = "Combitubo" value = "Combitubo" />
                    <Picker.Item label = "Cricotiroidotomía por punción" value = "Cricotiroidotomía por punción" />
                  </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Descompresión pleural</Text>
                    <Picker selectedValue = {this.state.descompresion_pleural} onValueChange = {descompresion_pleural => this.setState({descompresion_pleural})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No" value = "No" />
                      <Picker.Item label = "Si" value = "Si" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Lado</Text>
                    <Picker selectedValue = {this.state.lado_descompresion_pleural} onValueChange = {lado_descompresion_pleural => this.setState({lado_descompresion_pleural})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Derecho" value = "Derecho" />
                      <Picker.Item label = "Izquierdo" value = "Izquierdo" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Control cervical</Text>
                    <Picker selectedValue = {this.state.control_cervical} onValueChange = {control_cervical => this.setState({control_cervical})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Manual" value = "Manual" />
                      <Picker.Item label = "Collarín rígido" value = "Collarín rígido" />
                      <Picker.Item label = "Collarín blando" value = "Collarín blando" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Asistencia ventilatoria</Text>
                    <Picker selectedValue = {this.state.asistencia_ventilatoria} onValueChange = {asistencia_ventilatoria => this.setState({asistencia_ventilatoria})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "BVM" value = "BVM" />
                      <Picker.Item label = "Ventilador automático" value = "Ventilador automático" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Frec'
                  leftIcon={
                      <Icon
                      name='stopwatch'
                      size={24}
                      color='#009392'
                      type='ionicon'
                      />
                  }
                  onChangeText={frec => this.setState({frec})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Vol'
                  leftIcon={
                      <Icon
                      name='pint'
                      size={24}
                      color='#009392'
                      type='ionicon'
                      />
                  }
                  onChangeText={vol => this.setState({vol})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Text>Oxigenoterapia</Text>
                    <Picker selectedValue = {this.state.oxigenoterapia} onValueChange = {oxigenoterapia => this.setState({oxigenoterapia})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Puntas nasales" value = "Puntas nasales" />
                      <Picker.Item label = "Mascarilla simple" value = "Mascarilla simple" />
                      <Picker.Item label = "Mascarilla con reservorio" value = "Mascarilla con reservorio" />
                      <Picker.Item label = "Mascarilla venturi" value = "Mascarilla venturi" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Lts x min'
                  keyboardType='number-pad'
                  leftIcon={
                      <Icon
                      name='pint'
                      size={24}
                      color='#009392'
                      type='ionicon'
                      />
                  }
                  onChangeText={ltsxmin_oxigenoterapia => this.setState({ltsxmin_oxigenoterapia})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Text>Control de hemorragias</Text>
                    <Picker selectedValue = {this.state.control_hemorragias} onValueChange = {control_hemorragias => this.setState({control_hemorragias})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Presión directa" value = "Presión directa" />
                      <Picker.Item label = "Presión indirecta" value = "Presión indirecta" />
                      <Picker.Item label = "Gravedad" value = "Gravedad" />
                      <Picker.Item label = "Vendaje compresivo" value = "Vendaje compresivo" />
                      <Picker.Item label = "Crioterapia" value = "Crioterapia" />
                      <Picker.Item label = "Hemostático" value = "Hemostático" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Vías venosas</Text>
                    <Picker selectedValue = {this.state.vias_venosas} onValueChange = {vias_venosas => this.setState({vias_venosas})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Linea IV" value = "Linea IV" />
                      <Picker.Item label = "Catéter" value = "Catéter" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Número'
                  keyboardType='number-pad'
                  leftIcon={
                    <Icon
                    name='hashtag'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                  }
                  onChangeText={vias_venosas_numero => this.setState({vias_venosas_numero})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Text>Tipo de soluciones</Text>
                    <Picker selectedValue = {this.state.tipo_soluciones} onValueChange = {tipo_soluciones => this.setState({tipo_soluciones})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Hartman" value = "Hartman" />
                      <Picker.Item label = "NACL 0.9%" value = "NACL 0.9%" />
                      <Picker.Item label = "Mixta" value = "Mixta" />
                      <Picker.Item label = "Glucosa 5%" value = "Glucosa 5%" />
                      <Picker.Item label = "Otra" value = "Otra" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Cantidad'
                  keyboardType='number-pad'
                  leftIcon={
                      <Icon
                      name='copyright'
                      color='#009392'
                      type='font-awesome'
                      />
                  }
                  onChangeText={cantidad => this.setState({cantidad})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Infusiones'
                  leftIcon={
                      <Icon
                      name='eyedropper'
                      size={24}
                      color='#009392'
                      type='font-awesome'
                      />
                  }
                  onChangeText={infusiones => this.setState({infusiones})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Text>RCP</Text>
                    <Picker selectedValue = {this.state.rcp} onValueChange = {rcp => this.setState({rcp})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "RCP básica" value = "RCP básica" />
                      <Picker.Item label = "RCP avanzada" value = "RCP avanzada" />
                    </Picker>
                </View>
                <View style = {styles.inputs}>
                  <Text>Procedimiento</Text>
                    <Picker selectedValue = {this.state.procedimiento} onValueChange = {procedimiento => this.setState({procedimiento})} styles= {{color: 'black'}}>
                      <Picker.Item label = "No aplica" value = "No aplica" />
                      <Picker.Item label = "Inmovilización de extremidades" value = "Inmovilización de extremidades" />
                      <Picker.Item label = "Inmovilización en FEL" value = "Inmovilización en FEL" />
                      <Picker.Item label = "Curación" value = "Curación" />
                      <Picker.Item label = "Vendaje" value = "Vendaje" />
                    </Picker>
                </View>
              </View>
              <View>
                <Text>Manejo farmacológico y terapia eléctrica</Text>
                <View style = {styles.inputs}>
                  <Input
                  placeholder={'Hora'}
                  leftIcon={
                      <Icon
                      name='clockcircle'
                      size={24}
                      color='#009392'
                      type='ant-design'
                      />
                  }
                  value={this.state.hora}
                  onChangeText={hora => this.setState({hora})}
                  />
                </View>
                
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Medicamento'
                  leftIcon={
                      <Icon
                      name='medkit'
                      size={24}
                      color='#009392'
                      type='font-awesome'
                      />
                  }
                  onChangeText={medicamento => this.setState({medicamento})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Dosis'
                  leftIcon={
                      <Icon
                      name='thermometer'
                      size={24}
                      color='#009392'
                      type='entypo'
                      />
                  }
                  onChangeText={dosis => this.setState({dosis})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Via de administración'
                  leftIcon={
                      <Icon
                      name='Safety'
                      size={24}
                      color='#009392'
                      type='ant-design'
                      />
                  }
                  onChangeText={via_admin => this.setState({via_admin})}
                  />
                </View>
                <View style = {styles.inputs}>
                  <Input
                  placeholder='Terapia eléctrica'
                  leftIcon={
                      <Icon
                      name='electrical-services'
                      size={24}
                      color='#009392'
                      type='materialicons'
                      />
                  }
                  onChangeText={terapia_electrica => this.setState({terapia_electrica})}
                  />
                </View>
              </View>


              <View style={{marginTop:16}}>
                <LinearGradient style={{ width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'#900C3F',borderRadius:20}} start={{x:0, y:0}} end={{x:1, y:1}} colors={['#900C3F', 'darkred']}>
                  <View style={{ marginTop:16, width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'transparent',borderRadius:20}}>
                    
                    <TouchableOpacity
                      icon={{
                        type:'font-awesome',
                        name:"check-square",
                        size:15,
                        color:"white",
                      }}
                  
                      title="Guardar"
                      onPress={escribe}
                    >
                      <Text style={{textAlign:'center',fontSize:17,color:'white', justifyContent:'center',alignSelf:'center',fontWeight:'bold'}}>Guardar</Text> 
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View>
              <View style={{marginTop:16}}>
                    <LinearGradient style={{ width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'#900C3F',borderRadius:20}} start={{x:0, y:0}} end={{x:1, y:1}} colors={['#900C3F', 'darkred']}>
                      <View style={{ marginTop:16, width:150, height:50,alignSelf:'center', justifyContent:'center',marginBottom:20, backgroundColor:'transparent',borderRadius:20}}>
                        
                        <TouchableOpacity
                          icon={{
                            type:'font-awesome',
                            name:"check-square",
                            size:15,
                            color:"white",
                          }}
                      
                          title="Obtener"
                          onPress={lee}
                        >
                          <Text style={{textAlign:'center',fontSize:17,color:'white', justifyContent:'center',alignSelf:'center',fontWeight:'bold'}}>Obtener</Text> 
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>
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