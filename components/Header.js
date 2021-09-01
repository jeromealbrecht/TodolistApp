import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import ProfilePicture from 'react-native-profile-picture';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-paper';

const Header = (props) => {
    const { id } = props;
    console.log(id);
    return (
        <View style={{
            width: "100%",
            height: 115,
            backgroundColor: '#051954',
            borderBottomRightRadius: 45,
            borderBottomLeftRadius: 45,
            justifyContent: 'center'
        }}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={{ width: "23%", justifyContent: 'center' }}>


                    </View>
                </TouchableOpacity>





                <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ color: 'white', fontSize: 22, fontFamily: 'sans-serif-thin' }}>
                        Bienvenue sur la Todolist
                    </Text>
                </View>
            </View>



        </View>
    )
}

export default Header;