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


export default class Formulario4 extends Component {
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
        
        deformidades:'',
        contusiones:'',
        abrasiones:'',
        penetraciones:'',
        movimiento_paradouico:'',
        crepitacion:'',
        heridas:'',
        fracturas:'',
        efisema_suticutaneo:'',
        quemaduras:'',
        laceraciones:'',
        edema:'',
        alteracion_sesibilidad:'',
        alteracion_movilidad:'',
        dolor:'',
        zona_lesion:'',
        pupilas:'',
        hora:'',
        fr:'',
        fc:'',
        tas:'',
        tad:'',
        sa02:'',
        temp:'',
        gluc:'',
        ekg:'',
        neurologico:'',
        signos_sintomas:'',
        medicamentos:'',
        patologias:'',
        eventos_previos_relacionados:'',
        alregias:'',
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
                <Text style={styles.sectionTitle}> Expediente Médico </Text>
              </View>
              <View style={styles.imagen}>
                <Image style={styles.imagen} source={require('../app/android/app/src/Imagenes/udg.jpeg')}/>
              </View>
              <View style = {styles.inputs}>
                <Text>Deformidades (D)</Text>
                  <Picker selectedValue = {this.state.deformidades} onValueChange = {deformidades => this.setState({deformidades})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                    
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Contusiones (CD)</Text>
                  <Picker selectedValue = {this.state.contusiones} onValueChange = {contusiones => this.setState({contusiones})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Abrasiones (A)</Text>
                  <Picker selectedValue = {this.state.abrasiones} onValueChange = {abrasiones => this.setState({abrasiones})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Penetraciones (P)</Text>
                  <Picker selectedValue = {this.state.penetraciones} onValueChange = {penetraciones => this.setState({penetraciones})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Movimiento Paradouico (MP)</Text>
                  <Picker selectedValue = {this.state.movimiento_paradouico} onValueChange = {movimiento_paradouico => this.setState({movimiento_paradouico})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Crepitación (C)</Text>
                  <Picker selectedValue = {this.state.crepitacion} onValueChange = {crepitacion => this.setState({crepitacion})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Heridas (H)</Text>
                  <Picker selectedValue = {this.state.heridas} onValueChange = {heridas => this.setState({heridas})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Fracturas (F)</Text>
                  <Picker selectedValue = {this.state.fracturas} onValueChange = {fracturas => this.setState({fracturas})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Efisema suticutáneo (ES)</Text>
                  <Picker selectedValue = {this.state.efisema_suticutaneo} onValueChange = {efisema_suticutaneo => this.setState({efisema_suticutaneo})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Quemaduras (Q)</Text>
                  <Picker selectedValue = {this.state.quemaduras} onValueChange = {quemaduras => this.setState({quemaduras})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Laceraciones (L)</Text>
                  <Picker selectedValue = {this.state.laceraciones} onValueChange = {laceraciones => this.setState({laceraciones})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Edema (E)</Text>
                  <Picker selectedValue = {this.state.edema} onValueChange = {edema => this.setState({edema})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Alteración de sesibilidad (AS)</Text>
                  <Picker selectedValue = {this.state.alteracion_sesibilidad} onValueChange = {alteracion_sesibilidad => this.setState({alteracion_sesibilidad})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Alteración de movilidad (AM)</Text>
                  <Picker selectedValue = {this.state.alteracion_movilidad} onValueChange = {alteracion_movilidad => this.setState({alteracion_movilidad})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>
              <View style = {styles.inputs}>
                <Text>Dolor (DO)</Text>
                  <Picker selectedValue = {this.state.dolor} onValueChange = {dolor => this.setState({dolor})} styles= {{color: 'black'}}>
                    <Picker.Item label = "No" value = "No" />
                    <Picker.Item label = "Si" value = "Si" />
                  </Picker>
              </View>

              <View style = {styles.inputs}>
              <Text style={{fontSize:17}}>Lesion del cuerpo</Text>
                <View style={styles.imagen1}>
                  <Image style={styles.imagen1} source={require('../app/android/app/src/Imagenes/cuerpohumano.png')}/>
                </View>
                <Input
                placeholder='Zona de lesión'
                leftIcon={
                    <Icon
                    name='body'
                    size={24}
                    color='#009392'
                    type='ionicon'
                    />
                }
                onChangeText={zona_lesion => this.setState({zona_lesion})}
                />
            </View>


            <View style = {styles.inputs}>
              <Text style={{fontSize:17}}>Pupilas</Text>
                <View style={styles.imagen1}>
                  <Image style={styles.imagen1} source={require('../app/android/app/src/Imagenes/Pupilas1.png')}/>
                </View>
                
                <Picker selectedValue = {this.state.pupilas} onValueChange = {pupilas => this.setState({pupilas})} styles= {{color: 'black'}}>
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
                <Text style={{fontSize:17}}>Neurológico</Text>
                <Picker selectedValue = {this.state.neurologico} onValueChange = {neurologico => this.setState({neurologico})}>
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
                placeholder='Signos y síntomas'
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
                placeholder='Patologías'
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
                placeholder='Hora de última ingesta'
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