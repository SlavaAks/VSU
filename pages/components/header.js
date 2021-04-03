
import React  from 'react';
import { Text, View, StyleSheet,Image  } from 'react-native';


export default function Header(){
  return(
    <View style={{alignItems: 'center'}}>

       <Image
           style={{ width:400, height:100 }}
           source={ require('../components/VGU.png')}/>
    </View>
  )
}


