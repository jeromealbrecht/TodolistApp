import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import firestore from '@react-native-firebase/firestore';
import { useContext } from 'react';
import MyContext from '../context/userContext';

const SignUp = () => {

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const contexte = useContext(MyContext);

  // Ajouter utilisateur 
  function setValue() {
    addUser();

  }

  const ref = firestore().collection('User');

  ref.onSnapshot(querySnapshot => {
    const id = [];
    querySnapshot.forEach(doc => {
      const { firstname, name, complete } = doc.data();
      id.push({
        id: doc.id
      });
    });
    contexte.setLogin(id);
  })


  const addUser = async () => {
    await ref.add({
      name: lastname,
      firstname: firstname,
      complete: false
    })
    setLastname(''),
      setFirstname('')

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#3551A1' }}>

      <View style={{ alignItems: 'center', marginTop: 25 }}>
        <Text style={{
          color: 'white',
          fontSize: 28,
          fontFamily: 'sans-serif-thin',
        }}> Bienvenue sur la TodoList ! </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Image
          source={require("../assets/images/Humaaans.png")}
          resizeMode="contain"
          style={{
            width: 200,
            height: 200,
            marginTop: 40
          }} />

      </View>

      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{
          color: 'white',
          fontSize: 22,
          fontFamily: 'sans-serif-thin',
          marginBottom: 15
        }}> Inscription Facile </Text>

        <TextInput
          style={{
            width: "85%",
            height: 60,
            marginBottom: 8,
            color: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,1)",
            padding: 10
          }}
          placeholder={'Nom'}
          placeholderTextColor={'#3194AD'}
          label="Nom"
          value={lastname}
          onChangeText={lastname => setLastname(lastname)}
        />

        <TextInput
          style={{
            width: "85%",
            height: 60,
            marginBottom: 8,
            color: "rgba(255,255,255,1)",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,1)",
            padding: 10
          }}
          placeholder={'Prénom'}
          placeholderTextColor={'#3194AD'}
          label="Prénom"
          value={firstname}
          onChangeText={firstname => setFirstname(firstname)}
        />

        <TouchableOpacity
          onPress={() => setValue()}
          style={{
            width: "85%",
            height: 60,
            backgroundColor: "rgba(247,247,247,0)",
            borderRadius: 5,
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 1,
            justifyContent: "center",
            marginBottom: 55
          }}
        >
          <Text style={{
            width: 66,
            color: "rgba(255,255,255,1)",
            alignSelf: "center"
          }}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>

  )
}

export default SignUp;