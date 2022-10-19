import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, Platform} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//library.add(fab)
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {Input, Image, Button, Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-modern-datepicker';
import LinearGradient from 'react-native-linear-gradient';
//import DateTimePicker from ''





/*function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();
*/
//global.time = {{new Date().getHours() + ':' + new Date().getMinutes()}}
export default class Formulario1 extends Component {
  goToScreen(routeName,props){
    this.props.navigation.navigate(routeName)
  }
  constructor(props) {
    super(props);
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
      open: '',
      fecha1:'',
      folio:1,
    }

    /*updatesexo = (sexo) => {
      this.setState({sexo: sexo})
    };*/
  }
  //const ([date, setDate])  {useState(new Date())}
  //const ([open, setOpen])  {useState(false)}
  updateuniversitario = (universitario) => {
    this.setState({ universitario: universitario })
  };
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
    /*const screenOptions = (route, color) => {
      let iconName
      switch (route.name){
        case "calendar":
          iconName="bookmark-add"
          break;
        case "nombre":
          iconName="bookmark-add"
          break;
      }
      return(
        <Icon
          type="material-community"
          name={iconName}
          size={22}
          color={color}
        />
      )
    }*/
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

        {/*<View style = {styles.inputs}>
          
            <Input
              placeholder={this.state.fecha}
              //placeholder={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())}
              placeholderTextColor={'#900C3F'}
              //placeholder={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())}
              leftIcon={
              <Icon
                name='calendar'
                size={24}
                color='#009392'
                type='font-awesome'
              />
              }
              editable={false}
              //{placeholder => this.setState({fecha})}
              //onChangeText={fecha => this.setState({fecha})}
            />
        </View>*/}
        <View style = {{alignItems:'flex-end', marginRight:'5%'}}>
          <Text style = {{fontSize:17, color:'#900C3F'}}>Folio: {this.state.folio}</Text>
        </View>
        <View style = {styles.inputstext}>
          <Text style = {{fontSize:17,color:'#900C3F'}}>Fecha: {this.state.fecha ? this.state.fecha : null}</Text>
        </View>
        {/*<View style = {styles.inputs}>
          
          <Input
            placeholder={this.state.hora}
            //placeholder={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()) + ' ' + (new Date().getHours()) + ':' + new Date().getMinutes()}
            placeholderTextColor={'#900C3F'}
            //placeholder={new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())}
            leftIcon={
            <Icon
              name='clockcircle'
              size={24}
              color='#009392'
              type='ant-design'
            />
            }
            editable={false}
            //{placeholder => this.setState({fecha})}
            //onChangeText={fecha => this.setState({fecha})}
          />
      </View>*/}

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
          
            <Input
            placeholder='Operador'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={operador => this.setState({operador})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Prestador(es) del servicio'
            leftIcon={
                <Icon
                name='users'
                size={24}
                color='#009392'
                type='font-awesome'
                />
            }
            onChangeText={prestadores_servicio => this.setState({prestadores_servicio})}
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
      
       {/* <View style={{ marginTop:10, width:100, alignSelf:'center', justifyContent:'center',marginBottom:20}}>
            <Button style={{color:"red"}}
            icon={{
                  type:'font-awesome',
                  name:"check-square",
                  size:15,
                  color:"white",
                }
              }
            
            title=" Guardar"
            />
        </View>*/}

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
/*import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import {Input } from 'react-native-elements'
 import Icon from 'react-native-vector-icons/FontAwesome';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-elements/dist/helpers';
 /*import AppNavigation from './android/app/navigation/AppNavigation';
 import MENU from './menu';
 import AppNavigationCopy from './AppNavigation copy';
 import LoginScreen from './android/app/screens/LoginScreen';
 import LoginScreen2 from './android/app/screens/LoginScreen2';
 import {UsuarioProvider} from './android/app/context/UsuarioContext'; 
 
 const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  };
  
  const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
    return (
     <View>
       <View>
         <Text style={styles.sectionTitle}> Expediente Médico </Text>
         <Image style={styles.imagen} source={require('../doctores/android/app/src/Imagenes/udg.jpeg')}/>
       </View>
       <View>
       <Input
             placeholder='Fecha'
             leftIcon={
                 <Icon
                 name='date'
                 size={24}
                 color='black'
                 />
             }
             onChangeText={fecha=> this.setState({fecha})}
             />
       </View>
     </View>
    );
  };
  <Input
            placeholder='Sexo'
            leftIcon={
                <Icon
                name='calendar'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={sexo => this.setState({sexo})}
            />
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: 'gray',
      textAlign: 'center',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    imagen: {
     width: 100,
     height: 100,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
   },
  });
  
  export default App; */