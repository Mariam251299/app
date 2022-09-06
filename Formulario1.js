import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//library.add(fab)
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {Input, Image, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
//import DatePicker from 'react-native-date-picker';
import DatePicker from 'react-native-modern-datepicker';
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

export default class Formulario1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
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

        <View style = {styles.inputs}>
          
            <Input
              placeholder={this.state.fecha}
              leftIcon={
              <Icon
                name='calendar'
                size={24}
                color='black'
              />
              }
              editable={false}
            //onChangeText={fecha => this.setState({fecha})}
            />
        </View>
        <View>
          <DatePicker onDateChange={fecha => this.setState({fecha})} />
        </View>

        <View style = {styles.inputs}>
          
            <Input
            placeholder='Dia de la semana'
            leftIcon={
                <Icon
                name='calendar'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={dia_semana => this.setState({dia_semana})}
            />
        </View>

        <View style = {styles.inputs}>
          
            <Input
            placeholder='Motivo de la atencion'
            leftIcon={
                <Icon
                name='edit'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={motivo_atencion => this.setState({motivo_atencion})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Ubicacion del servicio'
            leftIcon={
                <Icon
                name='map-marker'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={ubicacion_servicio => this.setState({ubicacion_servicio})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Vehiculo'
            leftIcon={
                <Icon
                name='car'
                size={24}
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={vehiculo => this.setState({vehiculo})}
            />
        </View>
        <View style = {styles.inputs}>
          
            <Input
            placeholder='Numero de vehiculo'
            leftIcon={
                <Icon
                name='keyboard-o'
                size={24}
                color='black'
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
                color='black'
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
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={prestadores_servicio => this.setState({prestadores_servicio})}
            />
        </View>

        <View style = {styles.inputs}>
            
            <Input
            placeholder='Nombre o media filiacion'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
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
            leftIcon={
                <Icon
                name='long-arrow-up'
                size={24}
                color='black'
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
                color='black'
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
                color='black'
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
                color='black'
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
                color='black'
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
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={derechohabiente => this.setState({derechohabiente})}
            />
        </View>
        <View style = {styles.inputs}>
            <Text>¿Perteneciente a la red universitaria?</Text>
            <Picker selectedValue = {this.state.universitario} onValueChange = {universitario => this.setState({universitario})}>
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
                color='black'
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
                color='black'
                type='font-awesome'
                />
            }
            onChangeText={codigo => this.setState({codigo})}
            />
        </View>

        <View style={{marginTop:10, width:100, alignSelf:'center', justifyContent:'center',marginBottom:20}}>
            <Button
            icon={{
                  type:'font-awesome',
                  name:"check-square",
                  size:15,
                  color:"white",
                }
              }
            title=" Guardar"
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