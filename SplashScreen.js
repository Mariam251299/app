import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function SplashScreen(props) {

  return (
    <View style={{flex: 1,flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          width: 200,
          height: 200,
          margin: 100,
          marginTop: 100,
        }}
        source={require('./android/app/src/Imagenes/udg.jpeg')}
      />
      <View>
        <Text style={{ textAlign: 'center' }}>MedicApp</Text>
        <Text style={{ textAlign: 'center' }}>From CyM</Text>
      </View>
    </View>
  )

  goToScreen('MyRoutes');
  function goToScreen(routeName){
    props.navigation.replace(routeName)
  }  
}