import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import Header from './Header';
import firestore from '@react-native-firebase/firestore';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { List } from 'react-native-paper';
import Swipeable from 'react-native-swipeable';
import { LogBox } from 'react-native';
import Action from './Action';
import Empty from './Empty';


const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight ><Action /></TouchableHighlight>,
  // <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState('');
  const [alarm, setAlarm] = useState(false)

  const ref = firestore().collection('todos');
  const user = firestore().collection('User');



  const addTodo = async () => {
    await ref.add({
      title: todo,
      complete: false,
      Alarm: alarm
    })
    setTodo('')
  }

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    LogBox.ignoreLogs(['Animated.event']);
    LogBox.ignoreLogs(['componentWillMount']);
    LogBox.ignoreLogs(['Each']);

    ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, firstname, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
          firstname,
        });
      });
      setTodos(list)
      console.log(list);

    })
  }, [])
  let value;

  return (

    <View style={{ flex: 1, backgroundColor: '#3551A1' }}>

      <Header />
      <ScrollView style={{ flex: 1, marginTop: 25 }}>
        {todos.length != 0 ?
          todos.map((item, index) => {
            return (

              <Swipeable leftContent={leftContent} rightButtons={[
                <TouchableHighlight ><Action id={item.id} /></TouchableHighlight>,
              ]}>
                {/* Liste d'items à afficher  */}
                <List.Item
                  style={{ marginVertical: 5, alignSelf: 'center', width: "90%", height: 65, backgroundColor: '#051954', borderRadius: 10, elevation: 5 }}
                  key={index}
                  titleStyle={{ color: 'white' }}
                  title={`${item.title}`}
                  complete={item.complete}
                  right={props => <List.Icon  {...props} color={"white"} icon="chevron-right-circle" />}
                />

              </Swipeable>


            )
          })
          :
          <Empty />
        }
      </ScrollView>
      <TextInput label={'Ajouter une tâche'} value={todo} onChangeText={setTodo} />
      <Button color='white' onPress={() => addTodo()}>ajouter à la liste</Button>


    </View>

  );
}

export default Todo;
