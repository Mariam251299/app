import { NavigationContainer } from "@react-navigation/native";
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

export default createAppContainer(AppNavigation)