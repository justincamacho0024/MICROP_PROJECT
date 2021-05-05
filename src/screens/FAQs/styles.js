import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed

const styles = StyleSheet.create({
  color:{
backgroundColor:'#FEFCF4',
  },
    image:{
        marginTop:30 ,
        width: 150,
        height: 150,
        marginLeft: 10,
        alignSelf:'center'
    },
title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15
    
  },
  details: {
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 10,
    marginRight: 30,
    color: 'black',
    textAlign:'justify',
  },
  link:{
    marginLeft: 15,
    marginRight: 10,
    color: 'blue'
  },
  footer: {
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 20,
    color: 'gray'
  }
});

export default styles;
