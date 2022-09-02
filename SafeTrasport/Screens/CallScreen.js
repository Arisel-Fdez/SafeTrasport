import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CallScreen =() =>{
    return(
        <View style={style.container}>
            <Text style={style.title}>
                Safe Transport
            </Text>
            <Text style={style.name}>
                Call phone
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 25,
        padding: 5,
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    name:{
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
    },
})

export default CallScreen;