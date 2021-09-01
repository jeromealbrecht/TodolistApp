import React, { useState, useEffect } from 'react';
import { Text, Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const Action = (props) => {
    const { id } = props;

    const [action, setAction] = useState(false);

    async function Archiver() {

        try {
            await firestore()
                .collection('todos')
                .doc(id)
                .delete()
            setAction(true)
        } catch (e) {
            console.log(e);
        }

    }

    function Supprimer() {
        setAction(false)
    }

    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{ height: '100%', width: 50, flexDirection: 'row' }}>
                {action === false ?



                    <Button style={{ flex: 1, marginTop: 5, height: 50, justifyContent: 'center' }} icon="briefcase-check" mode="contained" color='red' width={50} compact={true} onPress={() => Archiver()}>

                    </Button>

                    :

                    <Button style={{ flex: 1, marginTop: 25, height: 40 }} icon="balloon" mode="contained" color='#2DA137' compact={true} onPress={() => Supprimer()}>

                    </Button>

                }

            </View>

        </View>

    )

}

export default Action;