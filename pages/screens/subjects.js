import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView,TouchableOpacity,Image } from 'react-native';
import { GlobalStyles } from '../style/global';
import Mybutton from '../components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../components/header';
var rol;
var db = openDatabase({  name: 'sql.db' });
let _retrieveData = async () => {
    try {
      var value = await AsyncStorage.getItem('User');
      if (value !== null) {
      rol=JSON.parse(value)['role']
      }
    } catch (error) {
     console.log("error");
    }
  };
const Subj = (props) => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {_retrieveData();
    db.transaction((tx) => {
      tx.executeSql(
          'SELECT * FROM Subjects WHERE curse = ? ',
          [props.route.params.nomer],
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
    return (<View style={{ height: 0.2,width: '100%', backgroundColor: '#808080'}}/>
    );
  };
  let Reload_sub=(id_sub)=>{let type =2;props.navigation.navigate('Subject',{id_sub,type});}
let Delete_subject=(id_sub)=>{


                                         db.transaction((tx) => {
                                             tx.executeSql(
                                                 'DELETE FROM  Subjects where id=?',
                                                 [id_sub],
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
  let listItemView = (item) => {
  let key=item.id;
  if(rol==1){
    return (
<View >
          <TouchableOpacity onPress={()=> props.navigation.navigate('Materials',{key})}>
          <View  style={{alignItems: 'center',
                             backgroundColor: '#f05555',
                             color: '#ffffff',
                             padding: 10,
                             marginTop: 16,
                             marginLeft: 35,
                             marginRight: 35,}}>
                   <Text style={{fontSize:18}}>{item.Subject}</Text>
                   </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row',
          position: 'relative',
          left:320}}>
           <TouchableOpacity onPress={()=> Reload_sub(item.id)}>
                                          <View style={{ }}>
                                                                      <Image
                                                                        style={{ width:35, height: 35}}
                                                                        source={require('../components/rel.png')}
                                                                      />
                                                                    </View>
                                            </TouchableOpacity>
           <TouchableOpacity onPress={()=> Delete_subject(item.id)}>
                    <View style={{marginTop: 3,}}>
                                                <Image
                                                  style={{ width:30, height: 30 }}
                                                  source={require('../components/del.png')}
                                                />
                                              </View>
                      </TouchableOpacity>

                                  </View>

</View>



    );
  }else return(
   <TouchableOpacity onPress={()=> props.navigation.navigate('Materials',{key})}>
             <View  style={{alignItems: 'center',
                                backgroundColor: '#f05555',
                                color: '#ffffff',
                                padding: 10,
                                marginTop: 16,
                                marginLeft: 35,
                                marginRight: 35,}}>
                      <Text >{item.Subject}</Text>
                      </View>
             </TouchableOpacity>)
      };
      let id_curs=props.route.params.nomer;

      let type=1;
console.log("CURSEEEE",id_curs);
_retrieveData();



  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
          <Header/>
           <Mybutton title="добавить дисциплину" customClick={()=>props.navigation.navigate('Subject',{id_curs,type}) }/>
            <FlatList data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)} />
          </View>
        </View>
      </SafeAreaView>
  );
};

export default Subj;


























