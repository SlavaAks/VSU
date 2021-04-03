import { StyleSheet } from 'react-native';


export const GlobalStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "gray",
    borderWidth:2,
    justifyContent: 'center',
    paddingTop: 5,
    padding: 8,
  },

  courseStyle: {
      margin: 10,
      fontSize: 25,
      backgroundColor:'#3096E4',
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth:  2,
      borderColor: 'blue',
      borderRadius:  6,
    },
  leftAlignStyle: {

      margin: 10,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'left',
      backgroundColor:'#3096E4',
      borderWidth:  2,
      borderColor: 'blue',
      borderRadius:  6,
    },
});