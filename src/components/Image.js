import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

//Image picker
import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

/*const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};*/

class SelectImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: '',
        }
    }

    chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.7,
            //includeBase64: true,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(JSON.stringify(response));s
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.assets[0].uri,
                    fileUri: response.uri
                });

                this.props.updateUrl(response.assets[0].uri)
            }
        });
    }

    myLaunchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            //sincludeBase64: true,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.7,
        };
        launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.assets[0].uri,
                    fileUri: response.uri
                });

                this.props.updateUrl(response.assets[0].uri)
            }
        });

    }

    /*launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });

    }*/

    renderFileData() {
        if(this.props.url == ""){
            return <Image source={require('../images/logoUDG.png')}
                style={styles.imageBox}
            />
        }
        else {
            return <Image source={{ uri: this.state.fileData }}
                style={styles.imageBox}
            />
        }
      }

    render() {
        return (
            <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.body}>
                <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Imagen</Text>
                <View style={styles.ImageSections}>
                    <View>
                        {this.renderFileData()}
                    </View>
                </View>

                <View style={styles.btnParentSection}>
                    <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
                    <Text style={styles.btnText}>Foto galeria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.myLaunchCamera} style={styles.btnSection}  >
                    <Text style={styles.btnText}>Tomar foto</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </SafeAreaView>
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        //height: '100%',
    },
    imageBox: {
        width: '80%',
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: "grey"
    },
    text: {
        height: '100%',
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    btnParentSection: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: "space-evenly",
    },
    btnSection:{
        height: 40,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'grey'
    },
    btnText:{
        height: '100%',
        width: '100%',
        textAlignVertical: "center",
        textAlign: "center",
        color: 'white',
    }
})

export default SelectImage;