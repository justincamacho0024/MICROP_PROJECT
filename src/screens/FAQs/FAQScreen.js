import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class FAQScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTitleStyle: {
        fontSize: 16
      }
    };
  };

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ScrollView style={styles.color}>
      <View>
          <Image
        style={styles.image}
        source={require('../../../assets/M_LOGO.png')}
        resizeMode='cover'  
      />
 <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 15,
    width:'90%',
  }}
/>
       <Text style={styles.title}>What is Microp?</Text>
       <Text style={styles.details} >MiCrop is an  application that brings the user a vast knowledge about the plant world. </Text>
        

       <Text style={styles.title}>How can I search plants?</Text>
       <Text style={styles.details}>By clicking the drawer icon, select Search and type your desired plant, you can also type a category of a plant.</Text>
       
       <Text style={styles.title}>I have questions, feature requests, or concern that aren’t listed above. How can I contact you?</Text>
       <Text style={styles.details}>You can reach me us via email (dev.microp@gmail.com) and we usually respond to queries within 24 hours.If you like Microp, please spread the word! Share your thoughts with other gardeners!  </Text>


       <Text style={styles.title}>What platforms is Microp available for?</Text>
       <Text style={styles.details}>Microp is currently available for Android only. iOS and Web support is coming soon!</Text>



       <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 15,
    width:'90%',
  }}
/>
        <Text style={styles.footer}>© 2021 Microp Team</Text>

      </View>
      </ScrollView>
    );
    
  }
  
}
