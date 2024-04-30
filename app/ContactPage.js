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

    profileImage: {
        width: 300,
        height: 300,
        borderRadius: 75,
        marginBottom: 20,
        marginTop: 200,
        marginLeft: 75,
        alignItems: 'flex-start'
        
    },

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
})

export default Contact; 