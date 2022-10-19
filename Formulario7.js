import React, { Component,useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Alert, StatusBar, BackHandler, Dimensions, SafeAreaView, FlatList, TouchableHighlight,AppRegistry, TextInput} from 'react-native';
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
import NumericInput from 'react-native-numeric-input';
import { Provider ,Appbar,Card,Searchbar} from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
//import * as Print from "expo-print";
//import * as MediaLibrary from "expo-media-library";
//import * as Sharing from "expo-sharing";

function updateSearch(value) {
  //do your search logic or anything
  console.log(value)
}

/*const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pdf Content</title>
    <style>
        body {
            font-size: 16px;
            color: rgb(255, 196, 0);
        }
        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Hello, UppLabs!</h1>
</body>
</html>
`;

const createAndSavePDF = async (html) => {
  try {
    const { uri } = await Print.printToFileAsync({ html });
    if (Platform.OS === "ios") {
      await Sharing.shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
      }
    }
  } catch (error) {
    console.error(error);
  }
};*/

export default class Formulario7 extends Component {





  /*async createPDF() {
    try {
        let options = {
          html: '<h1>PDF TEST</h1>',
          fileName: 'test',
          directory: 'Documents',
        };

        let file = await RNHTMLtoPDF.convert(options)
        // console.log(file.filePath);
        alert(file.filePath);
    } catch (err){
      console.log(err)
    }*/


  //}

    state = {
      selectedOption: null
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      // Option selected: { value: "rojo", label: "rojo" }
      console.log(`Option selected:`, selectedOption);
    };
    showAlert(){
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


    constructor(props) {


      super(props);
      this.state = {
        mostrarAlert:false,
        agua_inyectable_500ml:'',
        agua_oxigenada:'',
        agujas_20x32:'',
        algodon_paquete:'',
        bata_desechable:'',
        bolsa_negra:'',
        bolsa_roja:'',
        bolsa_amarilla:'',
        burn_free_gel:'',
        campos_esteriles:'',
        canula_blanda_aspiracion:'',
        canulas_nasofaringeas:'',
        canulas_orofaringeas:'',
        canula_yankawer:'',
        cateter_12:'',
        cateter_14:'',
        cateter_16:'',
        cateter_18:'',
        cateter_20:'',
        cateter_22:'',
        cateter_24:'',
        cinta_transpore_3m1:'',
        cinta_transpore_3m2:'',
        collarines_desechables:'',
        cubre_bocas:'',
        desinfectante_manos:'',
        desinfectante_superficies:'',
        fijador_te_adulto:'',
        fijador_te_pediatrico:'',
        gasas_esteriles:'',
        gasas_no_esteriles:'',
        guantes_crudos_pares:'',
        guantes_esteriles_pares:'',
        jeringa_1ml:'',
        jeringa_3ml:'',
        jeringa_5ml:'',
        jeringa_10ml:'',
        jeringa_20ml:'',
        jeringa_asepto:'',
        lentes_proteccion:'',
        lancetas_glucometro:'',
        ligadura_umbilical:'',
        manguera_aspirador:'',
        tegaderm:'',
        mascarilla_laringea:'',
        mascarilla_hudson:'',
        mascarilla_n95:'',
        mascarilla_o2_adulto:'',
        mascarilla_o2_ped:'',
        microgotero:'',
        normogotero:'',
        panales_adulto:'',
        perilla:'',
        puntas_nasales_adulto:'',
        puntas_nasales_ped:'',
        rastrillos:'',
        sabanas_quemados:'',
        sabanas_termicas:'',
        sabanas_desechables:'',
        sol_cs_1000ml:'',
        sol_cs_500ml:'',
        sol_cs_250ml:'',
        sol_ht_1000ml:'',
        sol_ht_500ml:'',
        sol_ht_250ml:'',
        sol_dx_1000ml:'',
        sol_dx_500ml:'',
        sol_dx_250ml:'',
        sol_gelafundin_500ml:'',
        sol_isodine_500ml:'',
        sol_jabon_quir_500ml:'',
        tiras_reactivas:'',
        torundeo_alcohol:'',
        torundeo_seco:'',
        tubos_endotraqueales:'',
        venda_5:'',
        venda_10:'',
        venda_15:'',
        venda_20:'',
        venda_30:'',
        canula_blanda_aspir:'',
        canula_yankawer:'',
        manguera_aspirador:'',
        electrodos_adulto:'',
        electrodos_pediatrico:'',
        gel_conductivo:'',
        quick_clot:'',
        adrenalina_1mg_amp:'',
        agua_inyectable_amp:'',
        aspirina_100mg_tab_caja:'',
        aspirina_500mg_tab_caja:'',
        atropina_1mg_amp:'',
        avapena_20mg_amp:'',
        butilhioscina_20mg_amp:'',
        captopril_25mg_tab_amp:'',
        carbon_activado_50gr:'',
        cloranfenicol_gotas:'',
        clorfenamina_10mg_amp:'',
        clonixinato_lisina:'',
        combivent_05_25_sol:'',
        diazepam_10mg_amp:'',
        diclofenaco_75mg_amp:'',
        dx_l_50ml:'',
        electrolitos_orales:'',
        fenitoina_sodica:'',
        flixotide_sol:'',
        furosemida_20mg_amp:'',
        hidrocortisona_100mg_amp:'',
        hidrocortisona_500mg_amp:'',
        isosorbide_5mg:'',
        isosorbida_dinirato_spray:'',
        ketorolaco_30mg_amp:'',
        meclixina_piridoxina_lido_amp:'',
        metamizol_sodico_1gr_amp:'',
        metoclopramida_10mg_amp:'',
        midazolam_15mg_amp:'',
        omeprazol_40mg_amp:'',
        oxitocina_5ui_amp:'',
        panclasa_40mg_amp:'',
        paracetamol_500mg_amp:'',
        paracetamol_gotas:'',
        salbutamol_5mg_sol:'',
        salbutamol_aerosol:'',
        sulfato_magnesio_1gr:'',
        trinitrato_glicerilo_perlas:'',
        hidralazaina:'',
        fitomenadiona:'',

        agua_inyectable_500ml_qty:'',
        agua_oxigenada_qty:'',
        agujas_20x32_qty:'',
        algodon_paquete_qty:'',
        bata_desechable_qty:'',
        bolsa_negra_qty:'',
        bolsa_roja_qty:'',
        bolsa_amarilla_qty:'',
        burn_free_gel_qty:'',
        campos_esteriles_qty:'',
        canula_blanda_aspiracion_qty:'',
        canulas_nasofaringeas_qty:'',
        canulas_orofaringeas_qty:'',
        canula_yankawer_qty:'',
        cateter_12_qty:'',
        cateter_14_qty:'',
        cateter_16_qty:'',
        cateter_18_qty:'',
        cateter_20_qty:'',
        cateter_22_qty:'',
        cateter_24_qty:'',
        cinta_transpore_3m1_qty:'',
        cinta_transpore_3m2_qty:'',
        collarines_desechables_qty:'',
        cubre_bocas_qty:'',
        desinfectante_manos_qty:'',
        desinfectante_superficies_qty:'',
        fijador_te_adulto_qty:'',
        fijador_te_pediatrico_qty:'',
        gasas_esteriles_qty:'',
        gasas_no_esteriles_qty:'',
        guantes_crudos_pares_qty:'',
        guantes_esteriles_pares_qty:'',
        jeringa_1ml_qty:'',
        jeringa_3ml_qty:'',
        jeringa_5ml_qty:'',
        jeringa_10ml_qty:'',
        jeringa_20ml_qty:'',
        jeringa_asepto_qty:'',
        lentes_proteccion_qty:'',
        lancetas_glucometro_qty:'',
        ligadura_umbilical_qty:'',
        manguera_aspirador_qty:'',
        tegaderm_qty:'',
        mascarilla_laringea_qty:'',
        mascarilla_hudson_qty:'',
        mascarilla_n95_qty:'',
        mascarilla_o2_adulto_qty:'',
        mascarilla_o2_ped_qty:'',
        microgotero_qty:'',
        normogotero_qty:'',
        panales_adulto_qty:'',
        perilla_qty:'',
        puntas_nasales_adulto_qty:'',
        puntas_nasales_ped_qty:'',
        rastrillos_qty:'',
        sabanas_quemados_qty:'',
        sabanas_termicas_qty:'',
        sabanas_desechables_qty:'',
        sol_cs_1000ml_qty:'',
        sol_cs_500ml_qty:'',
        sol_cs_250ml_qty:'',
        sol_ht_1000ml_qty:'',
        sol_ht_500ml_qty:'',
        sol_ht_250ml_qty:'',
        sol_dx_1000ml_qty:'',
        sol_dx_500ml_qty:'',
        sol_dx_250ml_qty:'',
        sol_gelafundin_500ml_qty:'',
        sol_isodine_500ml_qty:'',
        sol_jabon_quir_500ml_qty:'',
        tiras_reactivas_qty:'',
        torundeo_alcohol_qty:'',
        torundeo_seco_qty:'',
        tubos_endotraqueales_qty:'',
        venda_5_qty:'',
        venda_10_qty:'',
        venda_15_qty:'',
        venda_20_qty:'',
        venda_30_qty:'',
        canula_blanda_aspir_qty:'',
        canula_yankawer_qty:'',
        manguera_aspirador_qty:'',
        electrodos_adulto_qty:'',
        electrodos_pediatrico_qty:'',
        gel_conductivo_qty:'',
        quick_clot_qty:'',
        adrenalina_1mg_amp_qty:'',
        agua_inyectable_amp_qty:'',
        aspirina_100mg_tab_caja_qty:'',
        aspirina_500mg_tab_caja_qty:'',
        atropina_1mg_amp_qty:'',
        avapena_20mg_amp_qty:'',
        butilhioscina_20mg_amp_qty:'',
        captopril_25mg_tab_amp_qty:'',
        carbon_activado_50gr_qty:'',
        cloranfenicol_gotas_qty:'',
        clorfenamina_10mg_amp_qty:'',
        clonixinato_lisina_qty:'',
        combivent_05_25_sol_qty:'',
        diazepam_10mg_amp_qty:'',
        diclofenaco_75mg_amp_qty:'',
        dx_l_50ml_qty:'',
        electrolitos_orales_qty:'',
        fenitoina_sodica_qty:'',
        flixotide_sol_qty:'',
        furosemida_20mg_amp_qty:'',
        hidrocortisona_100mg_amp_qty:'',
        hidrocortisona_500mg_amp_qty:'',
        isosorbide_5mg_qty:'',
        isosorbida_dinirato_spray_qty:'',
        ketorolaco_30mg_amp_qty:'',
        meclixina_piridoxina_lido_amp_qty:'',
        metamizol_sodico_1gr_amp_qty:'',
        metoclopramida_10mg_amp_qty:'',
        midazolam_15mg_amp_qty:'',
        omeprazol_40mg_amp_qty:'',
        oxitocina_5ui_amp_qty:'',
        panclasa_40mg_amp_qty:'',
        paracetamol_500mg_amp_qty:'',
        paracetamol_gotas_qty:'',
        salbutamol_5mg_sol_qty:'',
        salbutamol_aerosol_qty:'',
        sulfato_magnesio_1gr_qty:'',
        trinitrato_glicerilo_perlas_qty:'',
        hidralazaina_qty:'',
        fitomenadiona_qty:'',
        busqueda:'',
      }
      
    }

    muestraAlert = () => {
      this.setState({
        mostrarAlert: true
      });
    };
  
    hideAlert = () => {
      this.setState({
        mostrarAlert: false
      });
    };
    onSelectedItemsChange = selectOptionEvaluation => {
      this.setState({ selectOptionEvaluation });
    };
    filterSearch(text){
      const newData = data.filter()
    }
    render() {
      const {mostrarAlert} = this.state;
      //console.log(this.props.navigation)
      //const navigation = useNavigation();

      //console.log(this.state.busqueda)
      const MyComponent = () => {
        const [searchQuery, setSearchQuery] = React.useState('');
      
        const onChangeSearch = query => setSearchQuery(query);
      }
      const generateHTML = value =>
        `<div>
        <span>Hi ${value}, how are you?
        </span>
        </div>`;
        const html = generateHTML(this.state.value);

      const state = this.state;
      const { selectOptionEvaluation } = this.state;
      return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Provider>
            {/*<View>
              <TouchableHighlight onPress={this.createAndSavePDF}>
                <Text>Create PDF</Text>
              </TouchableHighlight>
            </View>*/}
            <View>
            <Text style={styles.sectionTitle}> Expediente Médico </Text>
            </View>
            <View style={styles.imagen}>
              <Image style={styles.imagen} source={require('../app/android/app/src/Imagenes/udg.jpeg')}/>
            </View>
            {/*<View style={styles.mainbox}>
              <Card>
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={busqueda => this.setState({busqueda})}
                    onIconPress={this.showAlert}
                    iconColor='#900C3F'
                    placeholderTextColor='#009392'
                    theme={'dark'}
                  />
              </Card>

            
             </View>*/}

             
            <View style={styles.columns}>
              <Text style={{width:'45%', fontSize: 25, color:'#900C3F', alignItems:'center',alignContent:'center',justifyContent:'center', marginLeft:'10%'}}>Producto</Text>
              <Text style={{width:'45%', fontSize: 25, color:'#009392'}}>Cantidad del Producto</Text>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Agua inyectable 500ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.agua_inyectable_500ml} onValueChange = {agua_inyectable_500ml => this.setState({agua_inyectable_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={agua_inyectable_500ml_qty => this.setState({agua_inyectable_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Agua oxigenada</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.agua_oxigenada} onValueChange = {agua_oxigenada => this.setState({agua_oxigenada})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={agua_oxigenada_qty => this.setState({agua_oxigenada_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Agujas 20x32</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.agujas_20x32} onValueChange = {agujas_20x32 => this.setState({agujas_20x32})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={agujas_20x32_qty => this.setState({agujas_20x32_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Algodón paquete</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.algodon_paquete} onValueChange = {algodon_paquete => this.setState({algodon_paquete})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={algodon_paquete_qty => this.setState({algodon_paquete_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Bata desechable</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.bata_desechable} onValueChange = {bata_desechable => this.setState({bata_desechable})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={bata_desechable_qty => this.setState({bata_desechable_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Bolsa negra</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.bolsa_negra} onValueChange = {bolsa_negra => this.setState({bolsa_negra})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={bolsa_negra_qty => this.setState({bolsa_negra_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Bolsa roja</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.bolsa_roja} onValueChange = {bolsa_roja => this.setState({bolsa_roja})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={bolsa_roja_qty => this.setState({bolsa_roja_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Bolsa amarilla</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.bolsa_amarilla} onValueChange = {bolsa_amarilla => this.setState({bolsa_amarilla})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={bolsa_amarilla_qty => this.setState({bolsa_amarilla_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Burn free gel</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.burn_free_gel} onValueChange = {burn_free_gel => this.setState({burn_free_gel})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={burn_free_gel_qty => this.setState({burn_free_gel_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Campos estériles</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.campos_esteriles} onValueChange = {campos_esteriles => this.setState({campos_esteriles})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={campos_esteriles_qty => this.setState({campos_esteriles_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánula blanda de aspiración</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canula_blanda_aspiracion} onValueChange = {canula_blanda_aspiracion => this.setState({canula_blanda_aspiracion})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canula_blanda_aspiracion_qty => this.setState({canula_blanda_aspiracion_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánulas nasofaríngeas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canulas_nasofaringeas} onValueChange = {canulas_nasofaringeas => this.setState({canulas_nasofaringeas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canulas_nasofaringeas_qty => this.setState({canulas_nasofaringeas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánulas orofaríngeas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canulas_orofaringeas} onValueChange = {canulas_orofaringeas => this.setState({canulas_orofaringeas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canulas_orofaringeas_qty => this.setState({canulas_orofaringeas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánula yankawer</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canula_yankawer} onValueChange = {canula_yankawer => this.setState({canula_yankawer})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canula_yankawer_qty => this.setState({canula_yankawer_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #12</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_12} onValueChange = {cateter_12 => this.setState({cateter_12})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_12_qty => this.setState({cateter_12_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #14</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_14} onValueChange = {cateter_14 => this.setState({cateter_14})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_14_qty => this.setState({cateter_14_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #16</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_16} onValueChange = {cateter_16 => this.setState({cateter_16})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_16_qty => this.setState({cateter_16_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #18</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_18} onValueChange = {cateter_18 => this.setState({cateter_18})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_18_qty => this.setState({cateter_18_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #20</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_20} onValueChange = {cateter_20 => this.setState({cateter_20})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_20_qty => this.setState({cateter_20_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #22</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_22} onValueChange = {cateter_22 => this.setState({cateter_22})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_22_qty => this.setState({cateter_22_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Catéter #24</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cateter_24} onValueChange = {cateter_24 => this.setState({cateter_24})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cateter_24_qty => this.setState({cateter_24_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Cinta Transpore 3m 1"</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cinta_transpore_3m1} onValueChange = {cinta_transpore_3m1 => this.setState({cinta_transpore_3m1})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cinta_transpore_3m1_qty => this.setState({cinta_transpore_3m1_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cinta Transpore 3m 2"</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cinta_transpore_3m2} onValueChange = {cinta_transpore_3m2 => this.setState({cinta_transpore_3m2})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cinta_transpore_3m2_qty => this.setState({cinta_transpore_3m2_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Collarines desechables</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.collarines_desechables} onValueChange = {collarines_desechables => this.setState({collarines_desechables})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={collarines_desechables_qty => this.setState({collarines_desechables_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cubrebocas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cubre_bocas} onValueChange = {cubre_bocas => this.setState({cubre_bocas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cubre_bocas_qty => this.setState({cubre_bocas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Desinfectante para manos</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.desinfectante_manos} onValueChange = {desinfectante_manos => this.setState({desinfectante_manos})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={desinfectante_manos_qty => this.setState({desinfectante_manos_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Desinfectante para superficies</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.desinfectante_superficies} onValueChange = {desinfectante_superficies => this.setState({desinfectante_superficies})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={desinfectante_superficies_qty => this.setState({desinfectante_superficies_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Fijador de TE adulto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.fijador_te_adulto} onValueChange = {fijador_te_adulto => this.setState({fijador_te_adulto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={fijador_te_adulto_qty => this.setState({fijador_te_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            
            <View>
              <Text style={{marginLeft:'10%'}}>Fijador de TE pediátrico</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.fijador_te_pediatrico} onValueChange = {fijador_te_pediatrico => this.setState({fijador_te_pediatrico})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={fijador_te_pediatrico_qty => this.setState({fijador_te_pediatrico_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Gasas estériles</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.gasas_esteriles} onValueChange = {gasas_esteriles => this.setState({gasas_esteriles})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={gasas_esteriles_qty => this.setState({gasas_esteriles_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Gasas no estériles</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.gasas_no_esteriles} onValueChange = {gasas_no_esteriles => this.setState({gasas_no_esteriles})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={gasas_no_esteriles_qty => this.setState({gasas_no_esteriles_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Guantes crudos/pares</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.guantes_crudos_pares} onValueChange = {guantes_crudos_pares => this.setState({guantes_crudos_pares})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={guantes_crudos_pares_qty => this.setState({guantes_crudos_pares_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Guantes estériles/pares</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.guantes_esteriles_pares} onValueChange = {guantes_esteriles_pares => this.setState({guantes_esteriles_pares})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={guantes_esteriles_pares_qty => this.setState({guantes_esteriles_pares_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa 1ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jering} onValueChange = {jering => this.setState({jering})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_1ml_qty => this.setState({jeringa_1ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa 3ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jeringa_3ml} onValueChange = {jeringa_3ml => this.setState({jeringa_3ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_3ml_qty => this.setState({jeringa_3ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa 5ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jeringa_5ml} onValueChange = {jeringa_5ml => this.setState({jeringa_5ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_5ml_qty => this.setState({jeringa_5ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa 10ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jeringa_10ml} onValueChange = {jeringa_10ml => this.setState({jeringa_10ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_10ml_qty => this.setState({jeringa_10ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa 20ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jeringa_20ml} onValueChange = {jeringa_20ml => this.setState({jeringa_20ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_20ml_qty => this.setState({jeringa_20ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Jeringa asepto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.jeringa_asepto} onValueChange = {jeringa_asepto => this.setState({jeringa_asepto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={jeringa_asepto_qty => this.setState({jeringa_asepto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Lentes de protección</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.lentes_proteccion} onValueChange = {lentes_proteccion => this.setState({lentes_proteccion})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={lentes_proteccion_qty => this.setState({lentes_proteccion_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Lanceta para glucómetro</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.lancetas_glucometro} onValueChange = {lancetas_glucometro => this.setState({lancetas_glucometro})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={lancetas_glucometro_qty => this.setState({lancetas_glucometro_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Ligadura umbilical</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.ligadura_umbilical} onValueChange = {ligadura_umbilical => this.setState({ligadura_umbilical})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={ligadura_umbilical_qty => this.setState({ligadura_umbilical_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Manguera para aspirador</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.manguera_aspirador} onValueChange = {manguera_aspirador => this.setState({manguera_aspirador})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={manguera_aspirador_qty => this.setState({manguera_aspirador_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Tegaderm</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.tegaderm} onValueChange = {tegaderm => this.setState({tegaderm})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={tegaderm_qty => this.setState({tegaderm_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Mascarilla laríngea</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.mascarilla_laringea} onValueChange = {mascarilla_laringea => this.setState({mascarilla_laringea})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={mascarilla_laringea_qty => this.setState({mascarilla_laringea_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Mascarilla Hudson</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.mascarilla_hudson} onValueChange = {mascarilla_hudson => this.setState({mascarilla_hudson})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={mascarilla_hudson_qty => this.setState({mascarilla_hudson_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Mascarilla N-95</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.mascarilla_n95} onValueChange = {mascarilla_n95 => this.setState({mascarilla_n95})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={mascarilla_n95_qty => this.setState({mascarilla_n95_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Mascarilla O2 adulto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.mascarilla_o2_adulto} onValueChange = {mascarilla_o2_adulto => this.setState({mascarilla_o2_adulto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={mascarilla_o2_adulto_qty => this.setState({mascarilla_o2_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Mascarilla O2 pediátrico</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.mascarilla_o2_ped} onValueChange = {mascarilla_o2_ped => this.setState({mascarilla_o2_ped})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={mascarilla_o2_ped_qty => this.setState({fijador_te_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Microgotero</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.microgotero} onValueChange = {microgotero => this.setState({microgotero})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={microgotero_qty => this.setState({microgotero_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Normogotero</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.normogotero} onValueChange = {normogotero => this.setState({normogotero})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={normogotero_qty => this.setState({normogotero_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Pañales adulto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.panales_adulto} onValueChange = {panales_adulto => this.setState({panales_adulto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={panales_adulto_qty => this.setState({panales_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Perilla</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.perilla} onValueChange = {perilla => this.setState({perilla})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={perilla_qty => this.setState({perilla_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Puntas nasales adulto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.puntas_nasales_adulto} onValueChange = {puntas_nasales_adulto => this.setState({puntas_nasales_adulto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={puntas_nasales_adulto_qty => this.setState({puntas_nasales_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Puntas nasales pediátrico</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.puntas_nasales_ped} onValueChange = {puntas_nasales_ped => this.setState({puntas_nasales_ped})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={puntas_nasales_ped_qty => this.setState({puntas_nasales_ped_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Rastrillos</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.rastrillos} onValueChange = {rastrillos => this.setState({rastrillos})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={rastrillos_qty => this.setState({rastrillos_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sábanas quemados</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sabanas_quemados} onValueChange = {sabanas_quemados => this.setState({sabanas_quemados})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sabanas_quemados_qty => this.setState({sabanas_quemados_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sábanas térmicas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sabanas_termicas} onValueChange = {sabanas_termicas => this.setState({sabanas_termicas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sabanas_termicas_qty => this.setState({sabanas_termicas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sábanas desechables</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sabanas_desechables} onValueChange = {sabanas_desechables => this.setState({sabanas_desechables})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sabanas_desechables_qty => this.setState({sabanas_desechables_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Cs 0.9% 1000ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_cs_1000ml} onValueChange = {sol_cs_1000ml => this.setState({sol_cs_1000ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_cs_1000ml_qty => this.setState({sol_cs_1000ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Cs 0.9% 500ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_cs_500ml} onValueChange = {sol_cs_500ml => this.setState({sol_cs_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_cs_500ml_qty => this.setState({sol_cs_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Cs 0.9% 250ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_cs_250ml} onValueChange = {sol_cs_250ml => this.setState({sol_cs_250ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_cs_250ml_qty => this.setState({sol_cs_250ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Ht 1000ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_ht_1000ml} onValueChange = {sol_ht_1000ml => this.setState({sol_ht_1000ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_ht_1000ml_qty => this.setState({sol_ht_1000ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Sol Ht 500ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_ht_500ml} onValueChange = {sol_ht_500ml => this.setState({sol_ht_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_ht_500ml_qty => this.setState({sol_ht_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Ht 250ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_ht_250ml} onValueChange = {sol_ht_250ml => this.setState({sol_ht_250ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_ht_250ml_qty => this.setState({sol_ht_250ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Dx 1000ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_dx_1000ml} onValueChange = {sol_dx_1000ml => this.setState({sol_dx_1000ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_dx_1000ml_qty => this.setState({sol_dx_1000ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Dx 500ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_dx_500ml} onValueChange = {sol_dx_500ml => this.setState({sol_dx_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_dx_500ml_qty => this.setState({sol_dx_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Dx 250ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_dx_250ml} onValueChange = {sol_dx_250ml => this.setState({sol_dx_250ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_dx_250ml_qty => this.setState({sol_dx_250ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Gelafundin 500 ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_gelafundin_500ml} onValueChange = {sol_gelafundin_500ml => this.setState({sol_gelafundin_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_gelafundin_500ml_qty => this.setState({sol_gelafundin_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol Isodine 500 ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_isodine_500ml} onValueChange = {sol_isodine_500ml => this.setState({sol_isodine_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_isodine_500ml_qty => this.setState({sol_isodine_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sol jabón quir. 500ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sol_jabon_quir_500ml} onValueChange = {sol_jabon_quir_500ml => this.setState({sol_jabon_quir_500ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sol_jabon_quir_500ml_qty => this.setState({sol_jabon_quir_500ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Tiras reactivas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.tiras_reactivas} onValueChange = {tiras_reactivas => this.setState({tiras_reactivas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={tiras_reactivas_qty => this.setState({tiras_reactivas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Torundero con alcohol</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.torundero_con_alcohol} onValueChange = {torundero_con_alcohol => this.setState({torundero_con_alcohol})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={torundero_con_alcohol_qty => this.setState({torundero_con_alcohol_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Torundero seco</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.torundero_seco} onValueChange = {torundero_seco => this.setState({torundero_seco})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={torundero_seco_qty => this.setState({torundero_seco_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Tubos endotraqueales</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.tubos_endotraqueales} onValueChange = {tubos_endotraqueales => this.setState({tubos_endotraqueales})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={tubos_endotraqueales_qty => this.setState({tubos_endotraqueales_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Venda #5</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.venda_5} onValueChange = {venda_5 => this.setState({venda_5})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={venda_5_qty => this.setState({venda_5_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Venda #10</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.venda_10} onValueChange = {venda_10 => this.setState({venda_10})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={venda_10_qty => this.setState({venda_10_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Venda #15</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.venda_15} onValueChange = {venda_15 => this.setState({venda_15})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={venda_15_qty => this.setState({venda_15_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Venda #20</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.venda_20} onValueChange = {venda_20 => this.setState({venda_20})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={venda_20_qty => this.setState({venda_20_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Venda #30</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.venda_30} onValueChange = {venda_30 => this.setState({venda_30})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={venda_30_qty => this.setState({venda_30_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánula blanda de aspir</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canula_blanda_aspir} onValueChange = {canula_blanda_aspir => this.setState({canula_blanda_aspir})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canula_blanda_aspir_qty => this.setState({canula_blanda_aspir_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Cánula yankawer</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.canula_yankawer} onValueChange = {canula_yankawer => this.setState({canula_yankawer})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={canula_yankawer_qty => this.setState({canula_yankawer_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Manguera para aspirador</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.manguera_aspirador} onValueChange = {manguera_aspirador => this.setState({manguera_aspirador})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={manguera_aspirador_qty => this.setState({manguera_aspirador_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Electrodos adulto</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.electrodos_adulto} onValueChange = {electrodos_adulto => this.setState({electrodos_adulto})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={electrodos_adulto_qty => this.setState({electrodos_adulto_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Electrodos pediátrico</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.electrodos_pediatrico} onValueChange = {electrodos_pediatrico => this.setState({electrodos_pediatrico})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={electrodos_pediatrico_qty => this.setState({electrodos_pediatrico_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Gel constructivo</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.gel_conductivo} onValueChange = {gel_conductivo => this.setState({gel_conductivo})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={gel_conductivo_qty => this.setState({gel_conductivo_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Quick clot</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.quick_clot} onValueChange = {quick_clot => this.setState({quick_clot})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={quick_clot_qty => this.setState({quick_clot_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Adrenalina 1mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.adrenalina_1mg_amp} onValueChange = {adrenalina_1mg_amp => this.setState({adrenalina_1mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={adrenalina_1mg_amp_qty => this.setState({adrenalina_1mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Agua inyectable Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.agua_inyectable_amp} onValueChange = {agua_inyectable_amp => this.setState({agua_inyectable_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={agua_inyectable_amp_qty => this.setState({agua_inyectable_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Apirina 100mg Tab caja</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.aspirina_100mg_tab_caja} onValueChange = {aspirina_100mg_tab_caja => this.setState({aspirina_100mg_tab_caja})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={aspirina_100mg_tab_caja_qty => this.setState({aspirina_100mg_tab_caja_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Aspirina 500mg Tab caja</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.aspirina_500mg_tab_caja} onValueChange = {aspirina_500mg_tab_caja => this.setState({aspirina_500mg_tab_caja})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={aspirina_500mg_tab_caja_qty => this.setState({aspirina_500mg_tab_caja_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Atropina 1mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.atropina_1mg_amp} onValueChange = {atropina_1mg_amp => this.setState({atropina_1mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={atropina_1mg_amp_qty => this.setState({atropina_1mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Avapena 20mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.avapena_20mg_amp} onValueChange = {avapena_20mg_amp => this.setState({avapena_20mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={avapena_20mg_amp_qty => this.setState({avapena_20mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Butilhioscina 20mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.butilhioscina_20mg_amp} onValueChange = {butilhioscina_20mg_amp => this.setState({butilhioscina_20mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={butilhioscina_20mg_amp_qty => this.setState({butilhioscina_20mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Captopril 25mg Tab Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.captopril_25mg_tab_amp} onValueChange = {captopril_25mg_tab_amp => this.setState({captopril_25mg_tab_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={captopril_25mg_tab_amp_qty => this.setState({captopril_25mg_tab_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Carbón activado 50grs</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.carbon_activado_50gr} onValueChange = {carbon_activado_50gr => this.setState({carbon_activado_50gr})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={carbon_activado_50gr_qty => this.setState({carbon_activado_50gr_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Cloranfenicol gotas 5mg</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.cloranfenicol_gotas} onValueChange = {cloranfenicol_gotas => this.setState({cloranfenicol_gotas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={cloranfenicol_gotas_qty => this.setState({cloranfenicol_gotas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Clorfenamina 10mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.clorfenamina_10mg_amp} onValueChange = {clorfenamina_10mg_amp => this.setState({clorfenamina_10mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={clorfenamina_10mg_amp_qty => this.setState({clorfenamina_10mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>

            <View>
              <Text style={{marginLeft:'10%'}}>Clonixinato de lisina</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.clonixinato_lisina} onValueChange = {clonixinato_lisina => this.setState({clonixinato_lisina})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={clonixinato_lisina_qty => this.setState({clonixinato_lisina_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Combivent 0.5/2.5 mg sol</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.combivent_05_25_sol} onValueChange = {combivent_05_25_sol => this.setState({combivent_05_25_sol})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={combivent_05_25_sol_qty => this.setState({combivent_05_25_sol_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>








            <View>
              <Text style={{marginLeft:'10%'}}>Diazepam 10mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.diazepam_10mg_amp} onValueChange = {diazepam_10mg_amp => this.setState({diazepam_10mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={diazepam_10mg_amp_qty => this.setState({diazepam_10mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Diclofenaco 75mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.diclofenaco_75mg_amp} onValueChange = {diclofenaco_75mg_amp => this.setState({diclofenaco_75mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={diclofenaco_75mg_amp_qty => this.setState({diclofenaco_75mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Dx L 50% de 50ml</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.dx_l_50ml} onValueChange = {dx_l_50ml => this.setState({dx_l_50ml})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={dx_l_50ml_qty => this.setState({dx_l_50ml_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Electrolitos orales</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.electrolitos_orales} onValueChange = {electrolitos_orales => this.setState({electrolitos_orales})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={electrolitos_orales_qty => this.setState({electrolitos_orales_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Fenitoina sódica</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.fenitoina_sodica} onValueChange = {fenitoina_sodica => this.setState({fenitoina_sodica})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={fenitoina_sodica_qty => this.setState({fenitoina_sodica_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Flixotide Sol</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.flixotide_sol} onValueChange = {flixotide_sol => this.setState({flixotide_sol})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={flixotide_sol_qty => this.setState({flixotide_sol_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Furosemida 20mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.furosemida_20mg_amp} onValueChange = {furosemida_20mg_amp => this.setState({furosemida_20mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={furosemida_20mg_amp_qty => this.setState({furosemida_20mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Hidrocortisona 100mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.hidrocortisona_100mg_amp} onValueChange = {hidrocortisona_100mg_amp => this.setState({hidrocortisona_100mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={hidrocortisona_100mg_amp_qty => this.setState({hidrocortisona_100mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Hidrocortisona 500mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.hidrocortisona_500mg_amp} onValueChange = {hidrocortisona_500mg_amp => this.setState({hidrocortisona_500mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={hidrocortisona_500mg_amp_qty => this.setState({hidrocortisona_500mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Isosorbide 5mg</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.isosorbide_5mg} onValueChange = {isosorbide_5mg => this.setState({isosorbide_5mg})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={isosorbide_5mg_qty => this.setState({isosorbide_5mg_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Isosorbida Dinitrato Spray</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.isosorbida_dinirato_spray} onValueChange = {isosorbida_dinirato_spray => this.setState({isosorbida_dinirato_spray})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={isosorbida_dinirato_spray_qty => this.setState({isosorbida_dinirato_spray_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Ketorolaco 30mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.ketorolaco_30mg_amp} onValueChange = {ketorolaco_30mg_amp => this.setState({ketorolaco_30mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={ketorolaco_30mg_amp_qty => this.setState({ketorolaco_30mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Meclixina/piridoxina/lido Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.meclixina_piridoxina_lido_amp} onValueChange = {meclixina_piridoxina_lido_amp => this.setState({meclixina_piridoxina_lido_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={meclixina_piridoxina_lido_amp_qty => this.setState({meclixina_piridoxina_lido_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Metamizol sódico 1gr Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.metamizol_sodico_1gr_amp} onValueChange = {metamizol_sodico_1gr_amp => this.setState({metamizol_sodico_1gr_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={metamizol_sodico_1gr_amp_qty => this.setState({metamizol_sodico_1gr_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Metoclopramida 10mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.metoclopramida_10mg_amp} onValueChange = {metoclopramida_10mg_amp => this.setState({metoclopramida_10mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={metoclopramida_10mg_amp_qty => this.setState({metoclopramida_10mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Midazolam 15mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.midazolam_15mg_amp} onValueChange = {midazolam_15mg_amp => this.setState({midazolam_15mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={midazolam_15mg_amp_qty => this.setState({midazolam_15mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Omeprazol 40mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.omeprazol_40mg_amp} onValueChange = {omeprazol_40mg_amp => this.setState({omeprazol_40mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={omeprazol_40mg_amp_qty => this.setState({omeprazol_40mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Oxitocina 5ui Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.oxitocina_5ui_amp} onValueChange = {oxitocina_5ui_amp => this.setState({oxitocina_5ui_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={oxitocina_5ui_amp_qty => this.setState({oxitocina_5ui_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Panclasa 40mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.panclasa_40mg_amp} onValueChange = {panclasa_40mg_amp => this.setState({panclasa_40mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={panclasa_40mg_amp_qty => this.setState({panclasa_40mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Paracetamol 500mg Amp</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.paracetamol_500mg_amp} onValueChange = {paracetamol_500mg_amp => this.setState({paracetamol_500mg_amp})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={paracetamol_500mg_amp_qty => this.setState({paracetamol_500mg_amp_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Paracetamol Gotas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.paracetamol_gotas} onValueChange = {paracetamol_gotas => this.setState({paracetamol_gotas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={paracetamol_gotas_qty => this.setState({paracetamol_gotas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Salbutamol 5mg Sol</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.salbutamol_5mg_sol} onValueChange = {salbutamol_5mg_sol => this.setState({salbutamol_5mg_sol})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={salbutamol_5mg_sol_qty => this.setState({salbutamol_5mg_sol_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Salbutamol aerosol</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.salbutamol_aerosol} onValueChange = {salbutamol_aerosol => this.setState({salbutamol_aerosol})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={salbutamol_aerosol_qty => this.setState({salbutamol_aerosol_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Sulfato de magnesio 1gr</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.sulfato_magnesio_1gr} onValueChange = {sulfato_magnesio_1gr => this.setState({sulfato_magnesio_1gr})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={sulfato_magnesio_1gr_qty => this.setState({sulfato_magnesio_1gr_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Trinitrato de glicerilo Perlas</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.trinitrato_glicerilo_perlas} onValueChange = {trinitrato_glicerilo_perlas => this.setState({trinitrato_glicerilo_perlas})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={trinitrato_glicerilo_perlas_qty => this.setState({trinitrato_glicerilo_perlas_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Hidralazina</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.hidralazaina} onValueChange = {hidralazaina => this.setState({hidralazaina})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={hidralazaina_qty => this.setState({hidralazaina_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
            </View>
            <View>
              <Text style={{marginLeft:'10%'}}>Fitomenadiona</Text>
            </View>
            <View style = {styles.columns}>
              <Picker selectedValue = {this.state.fitomenadiona} onValueChange = {fitomenadiona => this.setState({fitomenadiona})} style={{width:'45%'}}>
                <Picker.Item label = "No" value = "No" />
                <Picker.Item label = "Si" value = "Si" />
              </Picker>
              <NumericInput onChange={fitomenadiona_qty => this.setState({fitomenadiona_qty})} textColor='#900C3F' rightButtonBackgroundColor='#009392' 
              leftButtonBackgroundColor='#009392' minValue={0} valueType='integer' style={{width:'45%'}}/>
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
                    onPress={()=> this.showAlert}
                  >
                    <Text style={{textAlign:'center',fontSize:17,color:'white', justifyContent:'center',alignSelf:'center',fontWeight:'bold'}}>Guardar</Text> 
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </View>
              <AwesomeAlert
                show={false}
                showProgress={false}
                title="Guardar"
                message="Guardado con exito"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Aceptar"
                //confirmButtonColor="#900C3F"
                confirmButtonColor='#009392'
                onCancelPressed={() => {
                  this.hideAlert();
                }}
                onConfirmPressed={() => {
                  this.hideAlert();
                }}
              />


            </Provider>
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
    },
    columns: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent:'center'
    },
    mainbox:{
      textAlign:'center',
      margin: 15,
      flex: 1,
      justifyContent: 'space-between',
    },
    textInput:{
      height: 30,
      borderWidth:1,
      borderColor: '900C3F',
      marginBottom: 10,
      marginHorizontal: 10
    },
})    