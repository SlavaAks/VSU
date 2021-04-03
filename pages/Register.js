'use strict'
import React, { useEffect , useState }   from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'sql.db' });

const Register= ({ navigation }) => {






    let [userLogin, setUserLogin] = useState('');
    let [userPassword, setUserPassword] = useState('');
    let [userRole, setUserRole] = useState('');
    let [Surname, setSurname] = useState('');
    let [Name, setName] = useState('');
    let [Email, setEmail] = useState('');
    let register_user = () => {
        console.log(userRole, userLogin, userPassword,Name,Surname,Email);
        if (!userRole) {
            alert('Введите роль');
            return;
        }

        if (!userLogin) {
            alert('Введите логин');
            return;
        }
        if (!userPassword) {
            alert('Введите пароль');
            return;
        }
             if (!Surname) {
                    alert('Введите фамилию');
                    return;
                }

                if (!Name) {
                    alert('Введите имя');
                    return;
                }
                if (!Email) {
                    alert('Введите почту');
                    return;
                }


  db.transaction(function (tx) {
            tx.executeSql(
               'INSERT INTO Students ( name,surname, email, login ) VALUES (?,?,?,?)',
              [Name,Surname , Email, userLogin],
               (tx, results) => {
                   console.log('Results', results.rowsAffected);
                   if (results.rowsAffected <= 0)  {alert('Registration Failed ');return;}
               }
         );
        });






 db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO Users (login, password, role) VALUES (?,?,?)',
                    [userLogin, userPassword, userRole],
                    (tx, results) => {

                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'You are Registered Successfully',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => navigation.navigate('HomeScreen'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else alert('Registration Failed');
                    }
                );
            });
}
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>
                            <Mytextinput
                                placeholder="Логин"
                                onChangeText={
                                    (userLogin) => setUserLogin(userLogin)
                                }
                                style={{ padding: 10 }}
                            />
                            <Mytextinput
                                placeholder="Пароль"
                                onChangeText={
                                    (userPassword) => setUserPassword(userPassword)
                                }
                                maxLength={10}

                                style={{ padding: 10 }}
                            />
                            <Mytextinput
                                placeholder="Роль(1 или 2)"
                                onChangeText={
                                    (userRole) => setUserRole(userRole)
                                }
                                maxLength={10}
                                keyboardType="numeric"

                                style={{ textAlignVertical: 'top', padding: 10 }}
                            />

                            <Mytextinput
                                                            placeholder="Фамилия"
                                                            onChangeText={
                                                                (Surname) => setSurname(Surname)
                                                            }
                                                            maxLength={10}


                                                            style={{ textAlignVertical: 'top', padding: 10 }}
                                                        />
                            <Mytextinput
                                                            placeholder="Имя"
                                                            onChangeText={
                                                                (Name) => setName(Name)
                                                            }
                                                            maxLength={10}

                                                            style={{ textAlignVertical: 'top', padding: 10 }}
                                                        />
                            <Mytextinput
                                                             placeholder="Почта"
                                                             onChangeText={
                                                                      (Email) => setEmail(Email)
                                                              }
                                                             maxLength={225}
                                                             numberOfLines={5}
                                                             multiline={true}
                                                             style={{ textAlignVertical: 'top', padding: 10 }}
                                                           />
                            <Mybutton title="Submit" customClick={register_user} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                </Text>
            </View>
        </SafeAreaView>
        );
            };
           export default Register;
