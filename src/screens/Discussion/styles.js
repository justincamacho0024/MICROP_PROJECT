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
        width: 300,
        height: 220,
        marginLeft: 10,
        alignSelf:'center'
    },
title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15
    
  },
  details: {
    marginTop: 5,
    marginLeft: 35,
    marginBottom: 10,
    marginRight: 25,
    color: 'black',
    textAlign:'justify',
  },
  link:{
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 10,
    color: 'blue'
  },
  footer: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 20,
    color: 'gray'
  }
});

export default styles;
