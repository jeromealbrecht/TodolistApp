import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

const Empty = () => {
    return (
        <View style={{ width: "100%", alignItems: 'center' }}>
            <StatusBar hidden />
            <Text style={{color: "white", fontSize: 18, marginTop: 15, fontFamily: 'sans-serif-thin'}}>Vous n'avez pas encore ajouté de tâches</Text>

            <View style={{
                width: "100%",
                height: 430,
                alignItems: 'center',
            }}>
                <Image
                    source={require("../assets/images/Humaaans.png")}
                    resizeMode="contain"
                    style={{
                        width: 300,
                        height: 300,
                        marginTop: 30
                    }} />
            </View>
        </View>
    )
}

export default Empty;
