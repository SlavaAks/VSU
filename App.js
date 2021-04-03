//import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './pages/HomeScreen';
import Register from './pages/Register';
import Auth from './pages/Auth';
import ViewAllUser from './pages/ViewAllUser';
import ViewAllSubject from './pages/ViewAllSubject';
import DeleteUser from './pages/DeleteUser';
import AddSubjects from './pages/AddSubjects';
import AddLesson from './pages/AddLesson';
import Courses from './pages/screens/courses';
import Subjects from './pages/screens/subjects';
import Materials from './pages/screens/materials';
import Lesson from './pages/screens/lesson';
import SQlite from 'react-native-sqlite-storage';
var db;
const App = () => {

db =SQlite.openDatabase({name:'sql.db', createFromLocation:'~sql.db',})
  db.transaction(function (txn) {
                             txn.executeSql(
                               "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                               [],
                               function (tx, res) {
                                 console.log('item:', res.rows.length);
                                 if (res.rows.length == 0) {
                                //   txn.executeSql('DROP TABLE IF EXISTS Subjects', []);
                                   txn.executeSql(
                                     'CREATE TABLE IF NOT EXISTS Subjects (id	INTEGER NOT NULL UNIQUE,Subject	TEXT NOT NULL,curse	INTEGER NOT NULL,PRIMARY KEY("id" AUTOINCREMENT))',
                                     []
                                   );
                                 }
                               }
                             );
                           });


                     db.transaction(function (txn) {
                             txn.executeSql(
                               "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                               [],
                               function (tx, res) {
                                 console.log('item:', res.rows.length);
                                 if (res.rows.length == 0) {
                               //   txn.executeSql('DROP TABLE IF EXISTS Users', []);
                                   txn.executeSql(
                                     'CREATE TABLE IF NOT EXISTS Users (id	INTEGER NOT NULL UNIQUE, login	TEXT NOT NULL UNIQUE, password	TEXT NOT NULL, role	INTEGER NOT NULL CHECK(role IN (1, 2)), PRIMARY KEY(id AUTOINCREMENT));',
                                     []
                                   );
                                 }
                               }
                             );
                           });


                     db.transaction(function (txn) {
                             txn.executeSql(
                               "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                               [],
                               function (tx, res) {
                                 console.log('item:', res.rows.length);
                                 if (res.rows.length == 0) {
                                 //  txn.executeSql('DROP TABLE IF EXISTS Students', []);
                                   txn.executeSql(
                                     'CREATE TABLE IF NOT EXISTS Students (id	INTEGER NOT NULL UNIQUE, name	TEXT NOT NULL, surname	TEXT NOT NULL, email	TEXT NOT NULL, login	TEXT NOT NULL, PRIMARY KEY(id AUTOINCREMENT),FOREIGN KEY(login) REFERENCES Users(login));',
                                     []
                                   );
                                 }
                               }
                             );
                           });

                      db.transaction(function (txn) {
                             txn.executeSql(
                               "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                               [],
                               function (tx, res) {
                                 console.log('item:', res.rows.length);
                                 if (res.rows.length == 0) {
                              //     txn.executeSql('DROP TABLE IF EXISTS Lesson', []);
                                   txn.executeSql(
                                     'CREATE TABLE IF NOT EXISTS Lesson (id	INTEGER NOT NULL UNIQUE, id_sub	INTEGER NOT NULL, text	TEXT NOT NULL, tema	TEXT NOT NULL, res	TEXT, PRIMARY KEY(id AUTOINCREMENT), FOREIGN KEY(id_sub) REFERENCES Subjects(id));',
                                     []
                                   );
                                 }
                               }
                             );
                           });



const Stack = createStackNavigator();
//const MenuNavigation=createDrawerNavigation({
    //HomeScreen:{
       //   screen:HomeScreen,
        //  navigationOptions: {
          //      title:'Администрирование'
             //   }
          // }
   // }
//)
    return (

        <NavigationContainer>
        <Stack.Navigator
         initialRouteName="Auth">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Admin',
                headerStyle: { backgroundColor: '#f4511e', },
                headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold', },}}/>

            <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{title: 'Регистрация пользователя',
                            headerStyle: {backgroundColor: '#f4511e', },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            fontWeight: 'bold', },
                            }} />
            <Stack.Screen
                name="Auth"
                component={Auth}
                options={{
                    title: 'Авторизация', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                            name="Subject"
                            component={AddSubjects}
                            options={{
                                title: 'Дисциплина', //Set Header Title
                                headerStyle: {
                                    backgroundColor: '#f4511e', //Set Header color
                                },
                                headerTintColor: '#fff', //Set Header text color
                                headerTitleStyle: {
                                    fontWeight: 'bold', //Set Header text style
                                },
                            }}
                        />
                         <Stack.Screen
                                                    name="Lesson"
                                                    component={AddLesson}
                                                    options={{
                                                        title: 'Лекция', //Set Header Title
                                                        headerStyle: {
                                                            backgroundColor: '#f4511e', //Set Header color
                                                        },
                                                        headerTintColor: '#fff', //Set Header text color
                                                        headerTitleStyle: {
                                                            fontWeight: 'bold', //Set Header text style
                                                        },
                                                    }}
                                                />
            <Stack.Screen
                name="ViewAll"
                component={ViewAllUser}
                options={{
                    title: 'Все ползователи', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
             <Stack.Screen
                            name="AllSubject"
                            component={ViewAllSubject}
                            options={{
                                title: 'Все предметы', //Set Header Title
                                headerStyle: {
                                    backgroundColor: '#f4511e', //Set Header color
                                },
                                headerTintColor: '#fff', //Set Header text color
                                headerTitleStyle: {
                                    fontWeight: 'bold', //Set Header text style
                                },
                            }}
                        />

            <Stack.Screen
                name="Delete"
                component={DeleteUser}
                options={{
                    title: 'Удаление  пользователя', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />

           <Stack.Screen
           name="Courses"
           component={Courses}
           options={{
           title: 'Курсы',
            headerStyle: {
                                   backgroundColor: '#f4511e', //Set Header color
                               },
                               headerTintColor: '#fff', //Set Header text color
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
           }}
           />


           <Stack.Screen
           name="Subjects"
           component={Subjects}
           options={{
           title: 'Предметы',
            headerStyle: {
                                   backgroundColor: '#f4511e', //Set Header color
                               },
                               headerTintColor: '#fff', //Set Header text color
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
           }}
           />

           <Stack.Screen
           name="Materials"
           component={Materials}
           options={{
           title: 'Учебные материалы',
            headerStyle: {
                                   backgroundColor: '#f4511e', //Set Header color
                               },
                               headerTintColor: '#fff', //Set Header text color
                               headerTitleStyle: {
                                   fontWeight: 'bold', //Set Header text style
                               },
           }}
           />
            <Stack.Screen
                      name="Lesson_show"
                      component={Lesson}
                      options={{
                      title: "Лекция",
                       headerStyle: {
                                              backgroundColor: '#f4511e', //Set Header color
                                          },
                                          headerTintColor: '#fff', //Set Header text color
                                          headerTitleStyle: {
                                              fontWeight: 'bold', //Set Header text style
                                          },
                      }}
                      />

        </Stack.Navigator>
</NavigationContainer>

    );
};

export default App;