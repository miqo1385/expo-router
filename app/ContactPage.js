import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const Contact = () => {
    const [image, setImage] = useState(null);
    const router = useRouter();
    const {Name,LastName} = useGlobalSearchParams();

    const pickImage = async () => {
    
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return (
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
           <Button style={[styles.technologiesContainer,styles.techBox, styles.techText]} title="Pick an image from camera roll" onPress={pickImage} />
      
            <Text style={styles.header}>Welcome to {Name} {LastName} contact page </Text>
            <View style={styles.technologiesContainer}>
                <Text style={[styles.techBox, styles.techText]}>Phone Number: 2062500139</Text>
                <Text style={[styles.techBox, styles.techText]}>Email: miqo1385@gmail.com</Text>
                <Text style={[styles.techBox, styles.techText]}>GitHub: https://github.com/miqo1385</Text>
            </View>
            <Button onPress={() => router.back()} title='Go Back'/>
        </View>
    )
}

const styles = StyleSheet.create({


    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    technologiesContainer: {
        flex:1,
        alignItems: 'center',
        padding: 24,
    },
    techBox: {
        backgroundColor: '#61dafb',
        borderRadius: 20,
        padding: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    techText: {
        color: '#fff',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 75,
        marginBottom: 20,
        marginTop: 200,
        marginLeft: 115,
        alignItems: 'flex-start'
      },
})

export default Contact; 