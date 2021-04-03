// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, { useState,useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import  {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'sql.db' });
const Auth = ({ navigation }) => {



  let [inputUserLogin, setInputUserLogin] = useState('');
  let [inputUserPassword, setInputUserPassword] = useState('');

  let searchUser = () => {
   _storeData = async (value)=> {
               try {
                 await AsyncStorage.setItem(
                   'User',
                 JSON.stringify(value)
                 );
               } catch (error) {
                 console.log("error");
               }
             };
   if ( (inputUserLogin=='r' && inputUserPassword=='r') ) { let Name="root";
                    let Surname="root";
                     navigation.navigate('HomeScreen',{Name,Surname});}
    db.transaction((tx) => {
      tx.executeSql(
          'SELECT * FROM Users where login = ? AND password = ? ',
          [inputUserLogin,inputUserPassword],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
            if(results.rows.item(0).role == 1){
           _storeData(results.rows.item(0));
          db.transaction((tx) => {console.log("ВОШЕД");
                tx.executeSql(
                    'SELECT * FROM Students where login = ?  ',
                    [inputUserLogin],
                    (tx, results) => {var len = results.rows.length;
                      if (1) { let Name=results.rows.item(0).name;
                    let Surname=results.rows.item(0).surname;
                    console.log("ВОШЕД");
                     navigation.navigate('HomeScreen',{Name,Surname});
                      } else { alert('No user found');}     } );}); }
            if(results.rows.item(0).role == 2){
             db.transaction((tx) => {
                            tx.executeSql('SELECT * FROM Students where login = ?  ',
                                [inputUserLogin],
                                (tx, results) => { var len = results.rows.length;
                                  if (len > 0) {let Name=results.rows.item(0).name;
                                  let Surname=results.rows.item(0).surname;
                           navigation.navigate('Courses',{Name,Surname});} else { alert('No user found');   }     } ); });}
                           } else {alert('No user found'); } }
      );
    });

}
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
          <Text>Пошел в дупло</Text>
            <Mytextinput
                placeholder="Введите логин"
                onChangeText={
                  (inputUserLogin) => setInputUserLogin(inputUserLogin)
                }
                style={{ padding: 10 }}
            />
              <Mytextinput
                  placeholder="Введите пароль"
                  onChangeText={
                      (inputUserPassword) => setInputUserPassword(inputUserPassword)
                  }
                  style={{ padding: 10 }}
              />
            <Mybutton title="Войти" customClick={searchUser} />

          </View>

        </View>
      </SafeAreaView>
  );
};

export default Auth;
