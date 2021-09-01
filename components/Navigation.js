import React from 'react';
import { useContext } from 'react'
import { View } from 'react-native';
import MyContext from '../context/userContext';
import SignUp from './SignUp';
import Todo from './Todo';

const Navigation = () => {
    const contexte = useContext(MyContext)
    // console.log(contexte);
    return (
        contexte.login == undefined ?
            <Todo />
            :
            <SignUp/>

    )
}

export default Navigation;