/*

http://148.202.152.33/mapaD.php

https://iplocation.io/base64-to-image

*/



import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, RefreshControl, TextInput } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//React native elements
//Solo me servio la version 3.4.2
//https://reactnativeelements.com/docs/3.4.2/overview
import { Button, Input } from 'react-native-elements';

//image-base-64
import ImgToBase64 from 'react-native-image-base64';
import { ImageEditor } from '@react-native-community/image-editor';


//My components
import Map from './components/Map';
import Report from './components/report';
import SelectImage from './components/Image';

//My scripts
import { uploadData } from './scripts/sendToPHP';
import { encodeImage } from './scripts/encodeImage';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default class Main extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      //Map
      long: 0,
      lat: 0,

      //Report
      reportType: null,
      description: "",

      //Image
      url: "",

      //Debug*
      info: "",

      //User
      codigo: "",
      nombre: "",

      //Update
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@mis_datos');
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log("MAIN");
      console.log(value);
      this.setState({ codigo: value["codigo"] });
      this.setState({ nombre: value["nombre"] });
    } catch (e) {
      // error
    }
  }

  myReports = () => {
    this.props.navigation.navigate("MyReports");
  }


  render() {
    const onRefresh = () => {
      cleanInfo();
      this.setState({refreshing:true})
      wait(1000).then(() => this.setState({refreshing:false})).catch(()=>{console.log("error onRefresh")})
    }

    const updateMapCoords = (newLong, newLat) => {
      this.setState({ long: newLong })
      this.setState({ lat: newLat })
    }

    const updateReportType = (newType) => {
      this.setState({ reportType: newType })
    }

    const updateReportDescription = (newDescription) => {
      this.setState({ description: newDescription })
    }

    const updateImageUrl = async (newUrl) => {
      console.log("Update URL: " + newUrl);
      let img = await encodeImage(newUrl);
      this.setState({ url: img });
    }

    const updateInfo = () => {
      if (this.state.reportType == '' || this.state.reportType == null || this.state.description == '' || this.state.url == '') {
        Alert.alert("Advertencia", "Es necesario llenar todos los campos para continuar");
      }
      else {
        let s = "Long: " + this.state.long + ", Lat: " + this.state.lat + "; Type: " + this.state.reportType + ", Description: " + this.state.description;

        let DATE = new Date();

        let data = {
          time: DATE.toLocaleTimeString(),  //hora
          date: DATE.toLocaleDateString(),  //fecha
          longitude: this.state.long,
          latitude: this.state.lat,
          repType: this.state.reportType,
          description: this.state.description,
          img: this.state.url,
          codigo: this.state.codigo,
        }

        s += " --> " + DATE.toLocaleString();
        this.setState({ info: s });

        uploadData(data);
        Alert.alert("Éxito", "Denuncia enviada correctamente", [
          {
            text: "Ok",
            onPress: onRefresh()   //Recargar pantalla
          }
        ]);
      }
    }

    //Limpiar campos
    const cleanInfo = () => {
      this.setState({ reportType: null });
      this.setState({ description: "" });
      this.setState({ url: "" });
    }

    return (
      <ScrollView style={styles.main}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.welcome}>Bienvenido {this.state.nombre}</Text>
          </View>
          <View style={styles.btnMyReports}>
            <Button
              icon={{ type: 'material', name: 'report', color: 'white', size: 26 }}
              iconPosition='right'
              onPress={ this.myReports }
            />
          </View>
        </View>
        <Text style={styles.h1}> Denuncias CUCEI </Text>
        <Text style={styles.h2}>Servicios generales</Text>

        {/* Componentes */}
        <Map updateCoords={updateMapCoords} />
        <Report
          updateType={updateReportType} updateDescription={updateReportDescription}
          reportType={this.state.reportType} description={this.state.description}
        />
        <SelectImage updateUrl={updateImageUrl} url={this.state.url} />

        <View style={styles.btnContainer}>
          <Button
            style={styles.btnSend}
            title={"Enviar"}
            onPress={updateInfo}
          />
          {/*
          <Text>Info: {this.state.info}</Text>
          */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  column: {
    flexDirection: 'column',
    marginRight: 20,
  },
  welcome: {
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: 'bold',
    marginTop: 15,
  },
  btnMyReports: {
    flexDirection: 'column',
    marginTop: 10,
  },
  h1: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 50,
    paddingLeft: '30%',
    paddingRight: '30%',
  },
})
