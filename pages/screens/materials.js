import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { GlobalStyles } from '../style/global';
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../components/header';
let user_role;
var db = openDatabase({  name: 'sql.db' });
let _retrieveData = async () => {
    try {
      var value = await AsyncStorage.getItem('User');
      if (value !== null) {
        user_role=JSON.parse(value)['role'];
      }
    } catch (error) {
     console.log("error");
    }
  };
const Tema = (props) => {

let [flatListItems, setFlatListItems] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
          'SELECT tema, id  FROM Lesson WHERE id_sub = ? ',
          [props.route.params.key],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
        <View
            style={{
              height: 0.2,
              width: '100%',
              backgroundColor: 'gray'
            }}
        />
    );
  };
let Reload_lesson=(id_les)=>{let type =2;
 props.navigation.navigate('Lesson',{id_les,type});
}
  let Delete_lesson=(id_lesson)=>{
let key=props.route.params.key;

                                         db.transaction((tx) => {
                                             tx.executeSql(
                                                 'DELETE FROM  Lesson where id=?',
                                                 [id_lesson],
                                                 (tx, results) => {
                                                     console.log('Results', results.rowsAffected);
                                                     if (results.rowsAffected > 0) {

                                                     props.navigation.navigate('Courses')

                                                     } else {
                                                         alert('Ошибка удаления');
                                                     }
                                                 }
                                             );
                                         });
                                     };
_retrieveData();
  let listItemView = (item) => {
  let key=item.id;


if(user_role==1){
    return (

            <View>

          <TouchableOpacity onPress={()=> props.navigation.navigate('Lesson_show',{key})}>

          <View  style={{backgroundColor: '#f05555', color: '#ffffff',padding: 20, marginTop: 16,
                  }}>
          <Text style={{color: '#111825',fontSize: 20,marginLeft: 50, marginRight: 35,}}>{item.tema}</Text>
          </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row',
                          position: 'relative',
                          left:320}}>
           <TouchableOpacity onPress={()=> Reload_lesson(item.id)}>
                                 <View style={{}}>
                                                             <Image
                                                               style={{ width:35, height: 35}}
                                                               source={require('../components/rel.png')}
                                                             />
                                                           </View>
                                   </TouchableOpacity>
          <TouchableOpacity onPress={()=> Delete_lesson(item.id)}>
          <View style={{marginTop: 3,}}>
                                      <Image
                                        style={{ width:30, height: 30 }}
                                        source={require('../components/del.png')}/>
                                    </View>
            </TouchableOpacity>

                        </View>
</View>
    );}
    else return(
  <TouchableOpacity onPress={()=> props.navigation.navigate('Lesson_show',{key})}>
          <View  style={{alignItems: 'center',
                                   backgroundColor: '#f05555',
                                   color: '#ffffff',
                                   padding: 10,
                                   marginTop: 16,
                                   marginLeft: 35,
                                   marginRight: 35,}}>
                 < Text >{item.tema}</Text>
              </View>
     </TouchableOpacity>)
  };
  let sub=props.route.params.key;

  let type=1;
  return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
          <Header/>
          <Mybutton title="добавить лекцию" customClick={()=>props.navigation.navigate('Lesson',{sub,type}) }/>
            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />
          </View>

        </View>
      </SafeAreaView>
  );
};

export default Tema;
