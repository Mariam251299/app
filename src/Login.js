import { Text, View, Dimensions, StyleSheet, ImageBackground, Alert } from 'react-native'
import React, { Component } from 'react'
import { Input, Button, Icon, Image } from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            codigo: "",
            nip: "",
        };
    }

    componentDidMount() {
        this.getData();
    }

    validate = () => {
        let _this = this;
        if(this.state.codigo == "" || this.state.nip == "") {
            Alert.alert("Advertencia", "Es necesario ingresar un código y una contraseña para continuar");
        }
        else {
            let data = "codigo=" + this.state.codigo + "&nip=" + this.state.nip;
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    let response = request.responseText;
                    console.log("RESPUESTA LOGIN");
                    console.log(response);
                    if(response == 0) {
                        Alert.alert("Error", "Código o nip incorrecto");
                    }
                    else {
                        let array_response = response.split(",");
                        let array_data = {
                            codigo: array_response[1],
                            nombre: array_response[2],
                        };
                        console.log("LOGIN");
                        console.log(array_data);
                        _this.storeData(array_data);
                        _this.props.navigation.navigate("Main");
                    }
                }
                else {
                    console.log("ERROR");
                    console.log(this.readyState);
                    console.log(this.status);
                }
            };
            
            request.open("POST", "http://148.202.152.33/ws_siiau.php", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(data);
        }
    }

    storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@mis_datos', jsonValue);
        } catch (e) {
          // error
        }
    }

    getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@mis_datos');
          console.log(jsonValue);
          if(jsonValue != null) {
            this.props.navigation.navigate("Main");
          }
        } catch(e) {
          // error
        }
    }

    render() {
        const navigation = this.context;
        return (
            <View>
                <ImageBackground style={ styles.Background } source={ require("./images/background-login.jpg") } resizeMode='stretch'>
                    <View style={styles.View}>
                        <View style={styles.Logo}>
                            <Image
                                source={ require("./images/logoUDG.png") }
                                style={{ height: 150, width: 150 }}
                            />
                        </View>

                        <Input
                            keyboardType='number-pad'
                            placeholder='Código'
                            leftIcon={{ type: 'font-awesome', name: 'user-o', size: 20, color: 'gray' }}
                            leftIconContainerStyle={{ marginRight: 5 }}
                            onChangeText={ codigo => this.setState({codigo}) }
                        />

                        <Input
                            secureTextEntry={ true }
                            keyboardType='default'
                            placeholder='Nip'
                            leftIcon={{ type: 'feather', name: 'lock', size: 20, color: 'gray' }}
                            leftIconContainerStyle={{ marginRight: 5 }}
                            onChangeText={ nip => this.setState({nip}) }
                        />

                        <View style={ styles.Button }>
                            <Button
                                title='Login'
                                icon={{ type: 'antdesign', name: 'login', color: 'white', size: 20 }}
                                iconPosition='right'
                                iconContainerStyle={{ marginLeft: 10 }}
                                titleStyle={{ fontSize: 20, marginLeft: 5 }}
                                buttonStyle={{ height: 50, width: 225, borderRadius: 25 }}
                                onPress={ this.validate }
                            />
                            {/*
                            <Button
                                title='Crear usuario'
                                icon={{ type: 'material-community', name: 'account-circle-outline', color: 'white', size: 24 }}
                                iconPosition='right'
                                iconContainerStyle={{ marginLeft: 10 }}
                                titleStyle={{ fontSize: 20, marginLeft: 5 }}
                                buttonStyle={{ height: 50, width: 225, borderRadius: 25, marginTop: 25 }}
                            />
                            */}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Background: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    },

    View: {
        margin: 30,
    },

    Logo: {
        alignItems: 'center',
        marginTop: Dimensions.get("screen").height / 7,
        marginBottom: 30,
    },
    
    Title: {
        fontSize: 26,
        textAlign: 'center',
    },

    Button: {
        alignItems: 'center',
        marginTop: 10,
    }
});