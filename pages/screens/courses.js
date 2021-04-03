import * as React from 'react';
import {useState} from 'react';
import Header from '../components/header';
import Logout from '../components/Logout';
import { GlobalStyles } from '../style/global';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

function TouchItem ({ item, pressHandler }){
return(
<TouchableOpacity onPress={()=> pressHandler(item.key)}>
  <View  style={{alignItems: 'center',backgroundColor: '#f05555', color: '#ffffff', padding:30,
                    marginTop: 25, marginLeft: 35,marginRight: 35,}}>
        <Text   style={{color: '#ffffff',fontSize:25}}>{item.course}</Text>
          </View>
</TouchableOpacity>
)
}
export default function Courses(props) {
const [courses, setCourses] = useState ([
{course: '1 курс', key: '1'},
{course: '2 курс', key: '2'},
{course: '3 курс', key: '3'},
{course: '4 курс', key: '4'},
]);
const pressHandler = (nomer) => {
props.navigation.navigate('Subjects',{nomer});};
return (<View >
<Header/>
<Logout pr={props.navigation}  Name={props.route.params.Name} Surname={props.route.params.Surname}/>
<FlatList
data = {courses}
renderItem ={({ item }) => (
<TouchItem item={item} pressHandler={pressHandler} />
)}/>
</View>
);
}


