import React from 'react';
import { View,Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default OnboardingItem = ({item}) => {
  const { width} =useWindowDimensions();
  return (

    <View style={[styles.container, {width}]}>

      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />

      <View style={{flex:0.3}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    marginTop: 80,
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontWeight: '800',
    fontSize: 35,
    marginBottom: 30,
    color: '#30694B',
    textAlign:'center',
  },
  description: {
    fontWeight: '200',
    color: '#62656b',
    textAlign:'center',
  },
});


