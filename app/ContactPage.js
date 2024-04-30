import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";

const Contact = () => {
    const router = useRouter();
    const {Name,LastName} = useGlobalSearchParams();

    return (
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <Image source= {{uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.18169-9/14632825_10210331221413894_837669629782233437_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RPB-cxvWRJcQ7kNvgG4kOXi&_nc_ht=scontent-sea1-1.xx&oh=00_AfAxI8QhHqG5A2Xdvw1bNLuEYVrKNG1I7YSpCXn_cIASPQ&oe=66581349'

            }} style={styles.profileImage} />
            <Text style={styles.header}>Welcome to {Name} {LastName} contact page </Text>
            <Button onPress={() => router.back()} title='Go Back'/>
        </View>
    )
}

const styles = StyleSheet.create({

    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
})

export default Contact; 