import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";

const userProfile = () => {
    const router = useRouter();
    const {Name,LastName} = useGlobalSearchParams();

    return (
        <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:30}}>Hola {Name} {LastName} </Text>
            <Button onPress={() => router.back()} title='Go Back'/>
        </View>
    )
}

export default userProfile; 