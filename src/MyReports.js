import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Card, Icon } from 'react-native-elements';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@mis_datos');
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log("MY REPORTS");
      console.log(value);
      this.setState({ codigo: value["codigo"] });
      this.getMyReports();
    } catch (e) {
      // error
    }
  }

  getMyReports = () => {
    let data = "codigo=" + this.state.codigo;

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let response = request.response;
            console.log("MIS DENUNCIAS");
            console.log(response);
        }
        else {
            console.log("ERROR");
            console.log(this.readyState);
            console.log(this.status);
        }
    };

    request.open('POST', 'http://148.202.152.33/loginMapaD/atendidos.php', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(data);
  }

  myReportsList = () => {

  }


  render() {
    return (
      <ScrollView style={styles.main}>
        <Text style={styles.h1}>Mis Denuncias</Text>
        <Card>
          <Card.Title>Realizada el dd/mm/yy hh:mm:ss</Card.Title>
          <Card.Divider/>
          <View>
            <Text style={styles.contenido}>Contenido</Text>
            <View style={styles.atendida}>
              <Text style={styles.contenido}>
                Atendida:
              </Text>
              <View style={styles.atendidaIcon}>
                {/*
                <Icon
                  name='check-circle'
                  type='feather'
                  color='green'
                  size={14}
                />
                */}
                <Icon
                  name='x-circle'
                  type='feather'
                  color='red'
                  size={14}
                />
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 10,
      },
    h1: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    contenido: {
      fontSize: 16,
    },
    atendida: {
      flexDirection: 'row',
      marginTop: 10,
    },
    atendidaIcon: {
      marginLeft: 5,
      marginTop: 5,
    },
})
