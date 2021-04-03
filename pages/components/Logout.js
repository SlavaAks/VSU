import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-community/async-storage';


export default function Logout({pr,Name,Surname}){
removeItem= async()=> {
    try {await await AsyncStorage.removeItem("User");
        return true;
    } catch(exception) {
        return false;
    }
}
const pressHandler = () => {removeItem();
pr.navigate('Auth');};
 let [Name1, setName] = useState('');
  let [Surname1, setSurname] = useState('');
useEffect(() => { setName(Name);
   setSurname(Surname)},[])
  return( <View style={{flexDirection: 'row' }}>
    <Text style={{ position: 'relative',left:180, fontSize: 18,}}> {Name1} {Surname1}</Text>
    <View style={{ position: 'relative',left:210}}>
        <TouchableOpacity onPress={pressHandler}>
       <Image   style={{ width:50, height:40}}
               source={ require('../components/exit.png')} />
      </TouchableOpacity>
    </View>
    </View>
  )
}


