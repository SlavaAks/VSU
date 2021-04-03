// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native


import React, { useState,useEffect  } from 'react';

import { View, Text, SafeAreaView,Button } from 'react-native';
import Logout from './components/Logout';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Header from './components/header';

let Name ;
let Surname;
const HomeScreen = (props) => {
  Name=props.route.params.Name;
  Surname=props.route.params.Surname;
  return ( <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
          <Header/>
          <Logout pr={props.navigation} Name={Name} Surname={Surname}/>
            <Mybutton
                title="Зарегестрировать пользователя"
                customClick={() => props.navigation.navigate('Register')}/>
            <Mybutton
                title="Все пользователи"
                customClick={() => props.navigation.navigate('ViewAll')}/>
            <Mybutton
                title="Удалить пользователя"
                customClick={() => props.navigation.navigate('Delete')}/>
             <Mybutton
                title="Просмотр курсов"
                customClick={() => props.navigation.navigate('Courses',{Name,Surname})}/>
          </View>
        </View>
      </SafeAreaView>
  );
};

export default HomeScreen;
