import React, { useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import Onboarding from './Onboarding/Onboarding';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {HomeScreen} from './src/screens/Home/HomeScreen'
// const Loading = () => {
//   <View>
//     <ActivityIndicator size={"large"}/>
//   </View>;
// };


// const AppStack = createStackNavigator();
export default function App() {
  
 // const [loading, setLoading] = useState(true);
  

  return (
    // <>
      
    //   <NavigationContainer>
    //     <AppStack.Navigator headerMode="none">
    //       <AppStack.Screen name="Onboarding" component={Onboarding} />
    //       <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    //     </AppStack.Navigator>
    //   </NavigationContainer>
    // </>
    // <View style={styles1.container}>
    // <Onboarding/>
     <AppContainer />
  );
}
// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default function App() {
//   return (
//     <View style={styles.container}>



//     </View>
//   );
// }

// const styles1 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });