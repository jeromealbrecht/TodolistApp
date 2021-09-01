import React, { useState } from 'react';
import Todo from './components/Todo';
import SignUp from './components/SignUp';
import { View } from 'react-native';
import Navigation from './components/Navigation';
import MyContext from './context/userContext';
const App = () => {
  
  const [login, setLogin] = useState();

  const isLogged = {
    login: login,
    setLogin: () => setLogin()
  }


  return (
    <MyContext.Provider value={isLogged}>

      <Navigation />


    </MyContext.Provider>

  )
}

export default App;