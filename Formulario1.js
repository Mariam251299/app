//Formulario 4 no me permite escribir en el campo debajo de la imagen
//Formulario 6 ver donde se guardan las firmas
//ver si puedo poner valores por default del picker
//Formulario 7 picker Agua inyectable 500ml
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, Platform} from 'react-native';
import {Input, Image, Button, Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-modern-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import DateTimePicker from ''



export default class Formulario1 extends Component {
  goToScreen(routeName,props){
    this.props.navigation.navigate(routeName)
  }
  constructor(props) {
    super(props);
    //this._isMounted = false;
    this.state = {
      hora:new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      fecha:'',
      dia_semana:'',
      motivo_atencion:'',
      ubicacion_servicio:'',
      vehiculo:'',
      num_vehiculo:'',
      operador:'',
      prestadores_servicio:'',
      otros_prestadores_servicio:'',
      
      nombre:'',
      sexo:'',
      edad:'',
      domicilio:'',
      colonia:'',
      municipio:'',
      telefono:'',
      derechohabiente:'',
      universitario:'',
      adscripcion:'',
      codigo:'',
      folio:1,
    }


  }

  componentDidMount() {
    
    setInterval(() => {
      this.setState({
       // hora : new Date().toLocaleString()
       
       fecha : new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()),
       hora : this.state.hora,
      })
    }, 1000)
  }
  render()
  {

    const escribe= async ()=>{
        var tempescribe = this.state.fecha+","+this.state.hora+","+this.state.dia_semana+","+this.state.motivo_atencion+","+this.state.ubicacion_servicio+","+this.state.vehiculo
        +","+this.state.num_vehiculo+","+this.state.operador+","+this.state.prestadores_servicio+","+this.state.otros_prestadores_servicio+","+this.state.nombre+","+this.state.sexo
        +","+this.state.edad+","+this.state.domicilio+","+this.state.colonia+","+this.state.municipio+","+this.state.telefono+","+this.state.derechohabiente+","+this.state.universitario
        +","+this.state.adscripcion+","+this.state.codigo+","+this.state.folio;
      try {
        await AsyncStorage.setItem('@formulario1', tempescribe)
      } catch (e) {
        // saving error
      }

    }
    const lee = async() => {
      try {
        const value = await AsyncStorage.getItem('@formulario1')
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
      <View 
        /*screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route,color)
        })}*/
      >
        <View>
         <Text style={styles.sectionTitle}> Expediente Médico </Text>
        </View>
        <View style={styles.imagen}>
          <Image style={styles.imagen} source={require('../app/android/app/src/Imagenes/udg.jpeg')}/>
        </View>

        <View style = {{alignItems:'flex-end', marginRight:'5%'}}>
          <Text style = {{fontSize:17, color:'#900C3F'}}>Folio: {this.state.folio}</Text>
        </View>
        <View style = {styles.inputstext}>
          <Text style = {{fontSize:17,color:'#900C3F'}}>Fecha: {this.state.fecha ? this.state.fecha : null}</Text>
        </View>


        <View style = {styles.inputstext}>
          <Text style = {{fontSize:17,color:'#900C3F'}}>Hora: {this.state.hora ? this.state.hora : null} </Text>
        </View>
        <View style = {{marginTop: '3%'}}>
          <DatePicker onDateChange={fecha => this.setState({fecha})} onTimeChange={hora => this.setState({hora})} options={{
            backgroundColor: '#FBFBFB',
            textHeaderColor: '#009392',
            textDefaultColor: '#900C3F',
            selectedTextColor: '#fff',
            mainColor: '#009392',
            textSecondaryColor: '#900C3F',
            //borderColor: 'rgba(122, 146, 165, 0.1)',
            borderColor: 'rgba(144, 12, 63, 1.0)',
          // borderColor:'#009392'
          }}
            //current={this.state.fecha}
            current={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + new Date().getMinutes()}// + (new Date().getHours()) + new Date().getMinutes()}
            selected={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + new Date().getMinutes()}// + (new Date().getHours())+ new Date().getMinutes()}
            //selected={this.state.fecha}
            mode="calendar"
            minuteInterval={1}
            style={{ borderRadius: 20, borderWidth:2, borderColor:'#009392' }}/>
        </View>

        <View style = {styles.inputs}>
            <Text>Día de la semana</Text>
            <Picker selectedValue = {this.state.dia_semana} onValueChange = {dia_semana => this.setState({dia_semana})}>
              <Picker.Item label = "Lunes" value = "Lunes" />
              <Picker.Item label = "Martes" value = "Martes" />
              <Picker.Item label = "Miercoles" value = "Miercoles" />
              <Picker.Item label = "Jueves" value = "Jueves" />
              <Picker.Item label = "Viernes" value = "Viernes" />
              <Picker.Item label = "Sabado" value = "Sabado" />
              <Picker.Item label = "Domingo" value = "Domingo" />
            </Picker>
          </View>
        <View style = {styles.inputs}>
          <Text>Motivo de la atención</Text>
            <Picker selectedValue = {this.state.motivo_atencion} onValueChange = {motivo_atencion => this.setState({motivo_atencion})} styles= {{color: 'black'}}>
              <Picker.Item label = "Enfermedad" value = "Enfermedad" />
              <Picker.Item label = "Traumatismo" value = "Traumatismo" />
              <Picker.Item label = "Gineco obstétrico" value = "Gineco obstétrico" />
            </Picker>
        </View>
        <View style = {styles.inputs}>
          <Text>Ubicación del servicio</Text>
            <Picker selectedValue = {this.state.ubicacion_servicio} onValueChange = {ubicacion_servicio => this.setState({ubicacion_servicio})} styles= {{color: 'black'}}>
              <Picker.Item label = "CUCEI" value = "CUCEI" />
              <Picker.Item label = "Inst. Dep." value = "Inst. Dep." />
              <Picker.Item label = "Politécnico" value = "Politécnico" />
              <Picker.Item label = "Vocacional" value = "Vocacional" />
              <Picker.Item label = "Prepa 12" value = "Prepa 12"/>
              <Picker.Item label = "Vía pública" value = "Vía pública"/>
            </Picker>
        </View>
        <View style = {styles.inputs}>
          <Text>Vehículo</Text>
            <Picker selectedValue = {this.state.vehiculo} onValueChange = {vehiculo => this.setState({vehiculo})} styles= {{color: 'black'}}>
              <Picker.Item label = "Vehículo oficial" value = "Vehículo oficial" />
              <Picker.Item label = "Cuatrimoto" value = "Cuatrimoto" />
              <Picker.Item label = "Ambulancia" value = "Ambulancia" />
              <Picker.Item label = "Ambulancia eléctrica" value = "Ambulancia eléctrica" />
              <Picker.Item label = "Otro" value = "Otro"/>
            </Picker>
          <Text>En caso de otro vehículo, indicar cual:</Text>
          <Input
            placeholder='Otro'
            leftIcon={
                <Icon
                name='car'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={vehiculo => this.setState({vehiculo})}
            />
        </View>
        
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Numero de vehiculo'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                name='car'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={num_vehiculo => this.setState({num_vehiculo})}
            />
        </View>

        <View style = {styles.inputs}>
          <Text>Operador</Text>
            <Picker selectedValue = {this.state.operador} onValueChange = {operador => this.setState({operador})} styles= {{color: 'black'}}>
              <Picker.Item label = "Javier Iñiguez" value = "Javier Iñiguez" />
              <Picker.Item label = "Rodrigo Gutiérrez" value = "Rodrigo Gutiérrez" />
              <Picker.Item label = "Yair Villagrana" value = "Yair Villagrana" />
              <Picker.Item label = "Jesús Hernández" value = "Jesús Hernández" />
              <Picker.Item label = "Jaime Juárez" value = "Jaime Juárez"/>
              <Picker.Item label = "Aída García" value = "Aída García"/>
            </Picker>
        </View>

        <View style = {styles.inputs}>
          <Text>Prestador(es) de servicio</Text>
            <Picker selectedValue = {this.state.prestadores_servicio} onValueChange = {prestadores_servicio => this.setState({prestadores_servicio})} styles= {{color: 'black'}}>
              <Picker.Item label = "Javier Iñiguez" value = "Javier Iñiguez" />
              <Picker.Item label = "Rodrigo Gutiérrez" value = "Rodrigo Gutiérrez" />
              <Picker.Item label = "Yair Villagrana" value = "Yair Villagrana" />
              <Picker.Item label = "Jesús Hernández" value = "Jesús Hernández" />
              <Picker.Item label = "Jaime Juárez" value = "Jaime Juárez"/>
              <Picker.Item label = "Aída García" value = "Aída García"/>
            </Picker>

          
              <Input
              placeholder='Otros prestadores'
              leftIcon={
                  <Icon
                  name='users'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={otros_prestadores_servicio => this.setState({otros_prestadores_servicio})}
              />

        </View>


        <View style = {styles.inputs}>
            
            <Input
            placeholder='Nombre o media filiación'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={nombre => this.setState({nombre})}
            />
        </View>


        <View style = {styles.inputs}>
          <Text>Sexo</Text>
          <Picker selectedValue = {this.state.sexo} onValueChange = {sexo => this.setState({sexo})}>
               <Picker.Item label = "Masculino" value = "M" />
               <Picker.Item label = "Femenino" value = "F" />
          </Picker>
        </View>


        <View style = {styles.inputs}>
          
            <Input
            placeholder='Edad'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                name='long-arrow-up'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={edad => this.setState({edad})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Domicilio'
            leftIcon={
                <Icon
                name='home'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={domicilio => this.setState({domicilio})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Colonia'
            leftIcon={
                <Icon
                name='home'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={colonia => this.setState({colonia})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Municipio'
            leftIcon={
                <Icon
                name='home'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={municipio => this.setState({municipio})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Telefono'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                name='phone'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={telefono => this.setState({telefono})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Derechohabiente a'
            leftIcon={
                <Icon
                name='smile-o'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={derechohabiente => this.setState({derechohabiente})}
            />
        </View>
        <View style = {styles.inputs}>
            <Text>¿Perteneciente a la red universitaria?</Text>
            <Picker selectedValue = {this.state.universitario} onValueChange = {universitario => this.setState({universitario})} styles= {{color: 'black'}}>
               <Picker.Item label = "Si" value = "Si" />
               <Picker.Item label = "No" value = "No" />
            </Picker>
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Adscripcion'
            leftIcon={
                <Icon
                name='file-text-o'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={adscripcion => this.setState({adscripcion})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Codigo'
            keyboardType='number-pad'
            leftIcon={
                <Icon
                name='barcode'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={codigo => this.setState({codigo})}
            />

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

    title:{
        fontSize: 30,
        textAlign: 'center',
    },
    inputs:{
      width: 500,
      marginTop: 15,
      marginLeft: 20,
      borderColor: 'blue',
    },
    inputstext:{
      width: 200,
      marginTop: 15,
      marginLeft: 20,
      borderColor: '#009392',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#00EBD1'
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
