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
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import ResponsiveImageView from 'react-native-responsive-image-view';
import Formulario1 from './Formulario1';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Formulario4 extends Component {
  showAlert(){
    return(
      <Picker selectedValue = {this.state.deformidades} onValueChange = {deformidades => this.setState({deformidades})} styles= {{color: 'black'}}>
        <Picker.Item label = "No" value = "No" />
        <Picker.Item label = "Si" value = "Si" />  
      </Picker>
    );
  }
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
        
        pierna_derecha_exploracion:'Deformidades (D)',
        pierna_izquierda_exploracion:'Deformidades (D)',
        brazo_derecho_exploracion:'Deformidades (D)',
        brazo_izquierdo_exploracion:'Deformidades (D)',
        abdomen_exploracion:'Deformidades (D)',
        torax_exploracion:'Deformidades (D)',
        cabeza_exploracion:'Deformidades (D)',
        espalda_exploracion:'Deformidades (D)',
        cabeza_detras_exploracion:'Deformidades (D)',
        pupilas:'No aplica',
        hora:'',
        fr:'',
        fc:'',
        tas:'',
        tad:'',
        sa02:'',
        temp:'',
        gluc:'',
        ekg:'',
        neurologico:'No aplica',
        signos_sintomas:'',
        medicamentos:'',
        patologias:'',
        eventos_previos_relacionados:'',
        alergias:'',
        hora_ultima_ingesta:'',
        tableHead: ['Hora', 'FR', 'FC', 'TAS', 'TAD', 'Sa02', 'Temp', 'Gluc', 'EKG', 'Neurologico'],
        tableData: [
          [(this.state.deformidades), '', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', '', '', '']
        ],
      }
      
    }
    onSelectedItemsChange = selectOptionEvaluation => {
      this.setState({ selectOptionEvaluation });
    };
    render() {
      
      const state = this.state;
      const { selectOptionEvaluation } = this.state;

      const escribe= async ()=>{
        var tempescribe = this.state.pierna_derecha_exploracion+","+this.state.pierna_izquierda_exploracion+","+this.state.brazo_derecho_exploracion
        +","+this.state.brazo_izquierdo_exploracion+","+this.state.abdomen_exploracion+","+this.state.torax_exploracion+","+this.state.cabeza_exploracion
        +","+this.state.espalda_exploracion+","+this.state.cabeza_detras_exploracion+","+this.state.pupilas+","+this.state.hora
        +","+this.state.fr+","+this.state.fc+","+this.state.tas+","+this.state.tad+","+this.state.sa02+","+this.state.temp+","+this.state.gluc+","+this.state.ekg
        +","+this.state.neurologico+","+this.state.signos_sintomas+","+this.state.medicamentos+","+this.state.patologias+
        ","+this.state.eventos_previos_relacionados+","+this.state.alergias+","+this.state.hora_ultima_ingesta;
      try {
        await AsyncStorage.setItem('@formulario4', tempescribe)
      } catch (e) {
        // saving error
      }

      }
      const lee = async() => {
        try {
          const value = await AsyncStorage.getItem('@formulario4')
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
             {/* <View style={styles.container1}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#900C3F'}}>
                  <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                  <Rows data={state.tableData} textStyle={styles.text} onValueChange={tableData=>this.setState({tableData})}/>
                </Table>
              </View>*/}
              <View>
                <Text style={styles.sectionTitle}> Expediente M??dico </Text>
              </View>
              <View style={styles.imagen}>
                <Image style={styles.imagen} source={require('../app/android/app/src/Imagenes/udg.jpeg')}/>
              </View>

              <View >
                <Text style={{fontSize:17}}>Lesion del cuerpo</Text>

                {/*<ResponsiveImageView source={require('../app/android/app/src/Imagenes/cuerpohumano.jpeg')}>
                    <View style={styles.inputsimage}>
                      <Image style={styles.imagen3} resizeMode = 'cover' source={require('../app/android/app/src/Imagenes/cuerpohumano.jpeg')} />
                    </View>
            </ResponsiveImageView>*/}

                <View style={styles.inputsimage}>
                  <Image style={styles.imagen2} source={require('../app/android/app/src/Imagenes/cuerpohumano.jpeg')}/>
                </View>
                  
                  <View style={{width:'15%',marginTop: '28%', marginLeft: '10%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.cabeza_exploracion} onValueChange = {cabeza_exploracion => this.setState({cabeza_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  
                  <View style={{width:'15%',marginTop: '39%', marginLeft: '10%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.torax_exploracion} onValueChange = {torax_exploracion => this.setState({torax_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                    
                  </View>
                  <View style={{width:'15%',marginTop: '47%', marginLeft: '10%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.abdomen_exploracion} onValueChange = {abdomen_exploracion => this.setState({abdomen_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'2%',marginTop: '65%', marginLeft: '27%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.brazo_izquierdo_exploracion} onValueChange = {brazo_izquierdo_exploracion => this.setState({brazo_izquierdo_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'15%',marginTop: '65%', marginLeft: '0%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.brazo_derecho_exploracion} onValueChange = {brazo_derecho_exploracion => this.setState({brazo_derecho_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'2%',marginTop: '69%', marginLeft: '18%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.pierna_izquierda_exploracion} onValueChange = {pierna_izquierda_exploracion => this.setState({pierna_izquierda_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'2%',marginTop: '69%', marginLeft: '7%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.pierna_derecha_exploracion} onValueChange = {pierna_derecha_exploracion => this.setState({pierna_derecha_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'15%',marginTop: '27%', marginLeft: '55%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.cabeza_detras_exploracion} onValueChange = {cabeza_detras_exploracion => this.setState({cabeza_detras_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
                  <View style={{width:'15%',marginTop: '39%', marginLeft:'54%',zIndex:2,position:'absolute', elevation: (Platform.OS === 'android') ? 80 : 0}}>
                    <Picker selectedValue = {this.state.espalda_exploracion} onValueChange = {espalda_exploracion => this.setState({espalda_exploracion})} style= {{color: 'black'}}>
                      <Picker.Item label = "D" value = "Deformidades (D)" />
                      <Picker.Item label = "CD" value = "Contusiones (CD)" />
                      <Picker.Item label = "A" value = "Abrasiones (A)" />
                      <Picker.Item label = "P" value = "Penetraciones (P)" />
                      <Picker.Item label = "MP" value = "Movimiento Paradouico (MP)" />
                      <Picker.Item label = "C" value = "Crepitaci??n (C)" />
                      <Picker.Item label = "H" value = "Heridas (H)" />
                      <Picker.Item label = "F" value = "Fracturas (F)" />
                      <Picker.Item label = "ES" value = "Efisema suticut??neo (ES)" />
                      <Picker.Item label = "Q" value = "Quemaduras (Q)" />
                      <Picker.Item label = "L" value = "Laceraciones (L)" />
                      <Picker.Item label = "E" value = "Edema (E)" />
                      <Picker.Item label = "AS" value = "Alteraci??n de sesibilidad (AS)" />
                      <Picker.Item label = "AM" value = "Alteraci??n de movilidad (AM)" />
                      <Picker.Item label = "DO" value = "Dolor (DO)" />
                    </Picker>
                  </View>
      
            </View>

 

            <View style = {styles.inputs}>
              
              <Text style={{fontSize:17}}>Pupilas</Text>
                         <View style = {styles.inputs}>
            </View>
                <View style={styles.inputsimage}>
                  <Image style={styles.imagen1} source={require('../app/android/app/src/Imagenes/Pupilas1.png')}/>
                </View>
                
                <Picker selectedValue = {this.state.pupilas} onValueChange = {pupilas => this.setState({pupilas})} styles= {{color: 'black'}}>
                  <Picker.Item label = "No aplica" value = "No aplica" />
                  <Picker.Item label = "Isocoria" value = "Isocoria" />
                  <Picker.Item label = "Miosis" value = "Miosis" />
                  <Picker.Item label = "Midriasis" value = "Midriasis" />
                  <Picker.Item label = "Anisocoria" value = "Anisocoria"/>
                </Picker>
            </View>
            <View>
              
              <View style = {styles.inputs}>
                <Text style={{fontSize:17}}>Signos vitales y monitoreo</Text>
                <Input
                placeholder='Hora'
                keyboardType='number-pad'
                leftIcon={
                    <Icon
                    name='edit'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                
                onChangeText={hora => this.setState({hora})}
                />
                
              </View>
              
              <View style = {styles.inputs}>
              <Input
              placeholder='FR'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={fr => this.setState({fr})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='FC'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={fc => this.setState({fc})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='TAS'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={tas => this.setState({tas})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='TAD'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={tad => this.setState({tad})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='Sa02'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={sa02 => this.setState({sa02})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='Temp'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={temp => this.setState({temp})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='Gluc'
              keyboardType='number-pad'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={gluc => this.setState({gluc})}
              />
              </View>
              <View style = {styles.inputs}>
              <Input
              placeholder='EKG'
              leftIcon={
                  <Icon
                  name='edit'
                  size={24}
                  color='#009392'
                  type='font-awesome'
                  />
              }
              onChangeText={ekg => this.setState({ekg})}
              />
              </View>
              <View style = {styles.inputs}>
                <Text style={{fontSize:17}}>Neurol??gico</Text>
                <Picker selectedValue = {this.state.neurologico} onValueChange = {neurologico => this.setState({neurologico})}>
                  <Picker.Item label = "No aplica" value = "No aplica" />
                  <Picker.Item label = "A" value = "A" />
                  <Picker.Item label = "V" value = "V" />
                  <Picker.Item label = "D" value = "D" />
                  <Picker.Item label = "I" value = "I" />
                </Picker>
              </View>
            </View>

            <View>

              
              
              <View style = {styles.inputs}>
                <Text style={{fontSize:17}}>SAMPLE</Text>
                <Input
                placeholder='Signos y s??ntomas'
                leftIcon={
                    <Icon
                    name='edit'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={signos_sintomas => this.setState({signos_sintomas})}
                />
              </View>
              <View style = {styles.inputs}>
            
                <Input
                placeholder='Medicamentos'
                leftIcon={
                    <Icon
                    name='medkit'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={medicamentos => this.setState({medicamentos})}
                />
              </View>
              <View style = {styles.inputs}>
            
                <Input
                placeholder='Patolog??as'
                leftIcon={
                    <Icon
                    name='edit'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={patologias => this.setState({patologias})}
                />
              </View>
              <View style = {styles.inputs}>
            
                <Input
                placeholder='Eventos previos relacionados'
                leftIcon={
                    <Icon
                    name='calendar'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={eventos_previos_relacionados => this.setState({eventos_previos_relacionados})}
                />
              </View>
              <View style = {styles.inputs}>
            
                <Input
                placeholder='Alergias'
                leftIcon={
                    <Icon
                    name='pencil'
                    size={24}
                    color='#009392'
                    type='font-awesome'
                    />
                }
                onChangeText={alergias => this.setState({alergias})}
                />
              </View>
              <View style = {styles.inputs}>
            
                <Input
                placeholder='Hora de ??ltima ingesta'
                keyboardType='number-pad'
                leftIcon={
                    <Icon
                    name='clockcircle'
                    size={24}
                    color='#009392'
                    type='ant-design'
                    />
                }
                onChangeText={hora_ultima_ingesta => this.setState({hora_ultima_ingesta})}
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
      width: 600,
      marginTop: 15,
      marginLeft: 20,
    },
    inputsimage:{
      width: '100%',
      marginTop: 15,
     // marginLeft: 20,
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
    imagen2:{
      width:'100%',
      height:600,
      justifyContent:'center',
      alignItems:'flex-start',
      alignSelf: 'center',
      zIndex:0,
      marginTop: 40,
      marginBottom: 40,
    },
    imagen3:{
      //width:width*0.5,
      //height:600,
      /*justifyContent:'center',
      alignItems:'flex-start',
      alignSelf: 'center',
      zIndex:0,
      marginTop: 40,
      marginBottom: 40,*/
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