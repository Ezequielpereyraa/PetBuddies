import React from 'react';
import {Image, StyleSheet, Button, Text, View, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import axios from 'axios';

const Prueba = () => {

    const onChooseImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        if(!result.cancelled) {
            uploadImage(result.uri, 'test-image')
            .then(() => {
                Alert.alert('success')
            })
            .catch(error => {
                Alert.alert(error);
            })
        }
    }
    const uploadImage = async (uri:any, imageName:any) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child('images/' + imageName);
        return ref.put(blob);
    }
    return(
        <View>
            <Button title="Choose img" onPress={() => onChooseImagePress()}></Button>
        </View>
    )
}
export default Prueba;