import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'sql.db' });

const ViewAllSubject = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
          'SELECT * FROM Subjects',
          [],
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
              backgroundColor: '#808080'
            }}
        />
    );
  };

  let listItemView = (item) => {
    return (
        <View
            key={item.id}
            style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Предмет: {item.Subject}</Text>
          <Text>Курс: {item.curse}</Text>
          <Text>Id предмета: {item.id}</Text>


        </View>
    );
  };

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />
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

export default ViewAllSubject;