import React, { useState, useEffect } from 'react';
import { Text, Image, View } from 'react-native';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const Action = (props) => {
    const { id } = props;

    const [action, setAction] = useState(false);

    async function handlePressArchived() {

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

    function handlePressDelete() {
        setAction(false)
    }

    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{ height: '100%', width: 50, flexDirection: 'row' }}>
                {action === false ?



                    <Button style={{ flex: 1, marginTop: 5, height: 50, justifyContent: 'center' }} icon="briefcase-check" mode="contained" color='red' width={50} compact={true} onPress={() => handlePressArchived()}>

                    </Button>

                    :

                    <Button style={{ flex: 1, marginTop: 25, height: 40 }} icon="balloon" mode="contained" color='#2DA137' compact={true} onPress={() => handlePressDelete()}>

                    </Button>

                }

            </View>

        </View>

    )

}

export default Action;