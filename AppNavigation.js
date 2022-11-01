import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MyRoutes from './MyRoutes';
import SplashScreen from "./SplashScreen";
import Formulario1 from './Formulario1';
import Signature from './Signature.js';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={({ route }) => ({
          headerShown:false})}>
        <Stack.Screen
          name = 'SplashScreen'
          component = {SplashScreen}
        />
        <Stack.Screen
          name = 'MyRoutes'
          component = {MyRoutes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation


/*import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import MyRoutes from './MyRoutes';
import SplashScreen from "./SplashScreen";

const AppNavigation = createNativeStackNavigator({

    SplashScreen:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    MyRoutes:{
        screen: MyRoutes,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(AppNavigation)*/