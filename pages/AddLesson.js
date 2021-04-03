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
import SQlite from 'react-native-sqlite-storage';

let db;

const AddLesson= (props) => {
db=SQlite.openDatabase({ name: 'sql.db', createFromLocation:'~sql.db',});

    let [Id_sub, setId_sub] = useState('');
    let [Text, setText] = useState('');
    let [Tema, setTema] = useState('');
    let [Res, setRes] = useState('');

    let updateAllStates = ( tema,text, res) => {
                                         setTema(tema);
                                         setText(text);
                                         setRes(res);
                                       };

   useEffect(()=>{ if(props.route.params.type==2){db.transaction((tx) => {
       tx.executeSql('SELECT * FROM Lesson WHERE id = ? ',
[props.route.params.id_les],
 (tx, results) => {var len = results.rows.length;
  if (len > 0) {
 let res = results.rows.item(0);
  updateAllStates( res.tema,res.text,res.res);}
                       });
                  });
                  }},[]);
    let add_Lesson = () => {
                if (!Text) {
                    alert('Введите текст ');
                    return;
                }
                if (!Tema) {
                    alert('Введите тему');
                    return;
                }

let key =props.route.params.key
if(props.route.params.type==1){
       db.transaction(function (tx) {
                       tx.executeSql(
                           'INSERT INTO Lesson (id_sub, text, tema, res) VALUES (?,?,?,?)',
                           [props.route.params.sub, Text, Tema, Res],
                           (tx, results) => {
                               console.log('Results', results.rowsAffected);
                               if (results.rowsAffected > 0) {
                                   Alert.alert(
                                       'Success',
                                       'Лекция добавилась',
                                       [
                                           {
                                               text: 'Ok',
                                               onPress: () => props.navigation.navigate('Courses'),
                                           },
                                       ],
                                       { cancelable: false }
                                   );
                               } else alert('Лекция не добавилась');
                           }
                       );
                   });
               }else {

            db.transaction((tx) => { tx.executeSql( 'UPDATE Lesson set  text=? , tema=? ,res=? where id=? ',
             [Text, Tema, Res, props.route.params.id_les],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'Лекция обновилась ',
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
        };
    return (
        <SafeAreaView style={{ flex: 1 }}>
              <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                  <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView
                      behavior="padding"
                      style={{ flex: 1, justifyContent: 'space-between' }}>
                           <Mytextinput placeholder="Тема"
                                        value={Tema}
                                        onChangeText={(Temas) => setTema(Temas)}
                                        maxLength={10}
                                        multiline={true}
                                        style={{ textAlignVertical: 'top', padding: 10 }}/>
                            <Mytextinput
                                                            placeholder="Текстовая информация"
                                                            onChangeText={
                                                                (Texts) => setText(Texts)
                                                            }
                                                            value={Text}
                                                            maxLength={225}
                                                            numberOfLines={5}
                                                            multiline={true}
                                                            style={{ textAlignVertical: 'top', padding: 10 }}
                                                        />

                            <Mytextinput
                                                             placeholder="Ссылка"
                                                             value={Res}
                                                             onChangeText={
                                                                      (Ress) => setRes(Ress)
                                                              }
                                                             maxLength={225}
                                                             numberOfLines={5}
                                                             multiline={true}
                                                             style={{ textAlignVertical: 'top', padding: 10 }}
                                                           />
                            <Mybutton title="Добавить" customClick={add_Lesson} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>


            </View>
        </SafeAreaView>
        );
            };

           export default AddLesson;
