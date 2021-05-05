import React, { useState, useRef } from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Alert, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import slides from './slides';
export default NextButton = ({scrollTo}) => {
    // const size = 128;
    // const strokeWidth = 2; 
    // const center = size / 2;
    // const radius = size / 2 - strokeWidth /2;

    // const scrollTo = () => {
    //     if (currentIndex < slides.length -1){
    //         slidesRef.current.scrollToIndex({ index:currentIndex + 1});
    //     }
    //     else {
    //         console.log('Last itemm');
    //     }
    // }

    return(
        <View style={styles.container}>
            
            
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6} title="sad">
            
            <AntDesign name="arrowright" size={32} color="#fff" />   
            </TouchableOpacity>
            <View style={styles.flexDirection}>
            </View>
            
        </View>
    );
};

const styles =StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
button:{
    position:'absolute',
    backgroundColor: '#358856',
    borderRadius:100,
    padding:20,
},
// left:{
//     textAlign:'left',
// },
// right:{
//     textAlign:'right',
// },
alignItems:{
    flexDirection: 'row',
    justifyContent: 'space-around',


},
});