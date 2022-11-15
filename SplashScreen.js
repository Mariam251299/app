import React, { Component, useContext, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends Component {
  goToScreen(routeName){
    this.props.navigation.navigate(routeName)
  }
  componentDidMount(){
    setTimeout( () => {
      //this.goToScreen('MyRoutes')
      this.props.navigation.navigate('MyRoutes')
    },2000,this)
  }
  render(){
    return (
      <View style={{flex: 1,flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
        <Animatable.Image
          animation="zoomInUp"
          //animation="pulse"
         // easing="ease-out"
          //iterationCount="infinite"
          style={{
            width: 200,
            height: 200,
            margin: 100,
            marginTop: 100,
          }}
          source={require('./android/app/src/Imagenes/udg.jpeg')}
        />
       { /*<Animatable.Image
          //animation="zoomInUp"
          animation="pulse"
         // easing="ease-out"
          iterationCount="infinite"
          style={{
            width: 200,
            height: 200,
            margin: 100,
            marginTop: -100,
          }}
          source={require('./android/app/src/Imagenes/udg.jpeg')}
        />*/}
        <View>
          <Animatable.Text animation="zoomInUp" easing="ease-out" style={{ textAlign: 'center' }}>MedicApp</Animatable.Text>
          <Animatable.Text animation="zoomInUp" style={{ textAlign: 'center' }}>By C&M</Animatable.Text>
        </View>
      </View>
    ) 
  } 
}