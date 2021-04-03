'use strict'
import React, { useState,useEffect } from 'react';
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
import SQlite,{openDatabase} from 'react-native-sqlite-storage';

let db;

const AddSubjets= (props) => {
/*useEffect(() => {
  db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS Subjects', []);
              txn.executeSql(
                'CREATE TABLE Subjects (id	INTEGER NOT NULL UNIQUE,Subject	TEXT NOT NULL,curse	INTEGER NOT NULL,PRIMARY KEY("id" AUTOINCREMENT))',
                []
              );
            }
          }
        );
      });
    }, []);*/
db=SQlite.openDatabase({name:'sql.db', createFromLocation:'~sq.db',});
    let [NameSub, setSub] = useState('');


    let add_curse = () => {
        console.log(NameSub);
        if (!NameSub) {
            alert('Введите дисциплину');
            return;
        }



if(props.route.params.type==1){
    db.transaction(function (tx) {
                tx.executeSql(
                    'INSERT INTO Subjects (Subject, curse) VALUES (?,?)',
                    [NameSub, props.route.params.id_curs],
                    (tx, results) => {
                        console.log('Results', results.rowsAffected);
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Success',
                                'Дисциплина добавилась',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => props.navigation.navigate('Courses'),
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else alert('Registration Failed');
                    }
                );
            });
        }else {console.log("SUUUB",props.route.params.id_sub)

                       db.transaction((tx) => { tx.executeSql(
                         'UPDATE Subjects set  Subject=? where id=? ',
                        [NameSub, props.route.params.id_sub],
                         (tx, results) => {
                           console.log('Results', results.rowsAffected);
                           if (results.rowsAffected > 0) {
                             Alert.alert(
                               'Success',
                               'Название дисциплины обновилось ',
                               [
                                 {
                                   text: 'Ok',
                                   onPress: () => props.navigation.navigate('Courses'),
                                 },
                               ],
                               { cancelable: false }
                             );
                           } else alert('Updation Failed');
                         }
                       );
                     });}

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
                                placeholder="Название предмета"
                                onChangeText={
                                    (NameSub) => setSub(NameSub)
                                }
                                style={{ padding: 10 }}
                            />


                            <Mybutton title="Submit" customClick={add_curse} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
        );
            };
           export default AddSubjets;
