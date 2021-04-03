import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView,TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../style/global';
import Video from 'react-native-video-player';
import { openDatabase } from 'react-native-sqlite-storage';
import { WebView } from 'react-native-webview';

var db = openDatabase({ name: 'sql.db' });

const Lesson = (props) => {

let [Lect, setLect] = useState({});
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
          'SELECT * FROM Lesson WHERE id = ? ',
          [props.route.params.key],
          (tx, results) => {
          var len = results.rows.length;
                   console.log('len', len);
                   if (len > 0) {
                     setLect(results.rows.item(0));
          }
          }
      );
    });
  }, []);




if(Lect.res){
  return (
         <View>
                       <View style={{alignItems: 'center',
                                                             padding: 10,
                                                              marginTop: 10,
                                                               marginLeft: 40,
                                                               marginRight: 35,}}>
                                                        <Text style={{fontSize: 30}}> {Lect.tema}</Text>
                                          </View>
                                          <View  style={{
                                                                              padding: 10,
                                                                              marginTop: 15,
                                                                              marginLeft: 10,
                                                                              marginRight: 35,}}>
                                                       <Text style={{fontSize: 20}}> {Lect.text}</Text>
                                           </View>





                        <View style={{
                                       width:"100%",
                                       height:195
                                   }}>
                                      <WebView
                                       source={{uri:Lect.res
                                       }}
                                      />

                                   </View>

 </View>
  );}else return (
  <View>
                   <View style={{alignItems: 'center',
                                                            padding: 10,
                                                            marginTop: 10,
                                                            marginLeft: 40,
                                                            marginRight: 35,}}>
                                  <Text style={{fontSize: 30}}> {Lect.tema}</Text>
                    </View>
                    <View  style={{
                                                               padding: 10,
                                                               marginTop: 15,
                                                               marginLeft: 10,
                                                               marginRight: 35,}}>
                                 <Text style={{fontSize: 20}}> {Lect.text}</Text>
                     </View>
                     </View>
            )
};

export default Lesson;
