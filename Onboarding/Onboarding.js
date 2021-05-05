import React, { useState, useRef} from 'react';
import slides from './slides'

import Paginator from './Paginator'
import OnboardingItem from './OnboardingItem'
import NextButton from './NextButton'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, FlatList, Animated, ToastAndroid } from 'react-native';

import ViewPager from '@react-native-community/viewpager';
//import Home from '../screens/Home';

// import FlashMessage from "react-native-flash-message";
// import { showMessage, hideMessage } from "react-native-flash-message";
// import { useNavigation } from '@react-navigation/native';
export default Onboarding = () => {
  // const [viewedOnboarding, setViewedOnboarding] = useState(false);
  // const navigation = useNavigation();
  // const checkOnboarding = async () => {
  //   try{
  //     const value = await AsyncStorage.getItem('@viewedOnboarding');
  
  //     if (value !== null){
  //       setViewedOnboarding(true);
  //     }
  //   }
  //   catch(err){
  //     console.log('Error @checkOnboarding: ', err)
  //   }
  //   finally{
  //     //setLoading(false);
  //   }
  // }

  // useEffect(() =>{
  //   checkOnboarding();
  // }, [])

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef =useRef(null);
    const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
    }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50}).current;
  const [shouldShow, setShouldShow] = useState(true);
  const scrollTo = async () => {
        if (currentIndex < slides.length -1){
            slidesRef.current.scrollToIndex({ index:currentIndex + 1});
            if( currentIndex == 2){
              ToastAndroid.show("Click again to Get Started", ToastAndroid.SHORT);
              // setShouldShow(!shouldShow)
            }
        }
        else {
          //navigation.navigate('HomeScreen');
            console.log('Last itemmsss');
        }
    };
    
  return (

    <View style={styles.container}>

      <View style={{flex:3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver:false,
        })}
        scrollEventThrottle={30}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
    <Paginator data={slides} scrollX={scrollX}/>

    {/* {shouldShow ? (
 <Text styles={styles.bigBlue}> Get Started</Text>
        ) : null} */}
    
    <NextButton scrollTo={scrollTo} />

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
  textHide:{
    justifyContent: 'center',
    marginTop:80,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});




