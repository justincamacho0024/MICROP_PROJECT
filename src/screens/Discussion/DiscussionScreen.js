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

export default class IngredientsDetailsScreen extends React.Component {
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
        source={require('../../../assets/images/disc1.jpg')}
        resizeMode='contain'  
      />


       <Text style={styles.title}>MEET GREG</Text>
       <Text style={styles.details} >I’m so excited to share that HPJ has partnered with Greg, the app that helps you grow healthy and happier plants, to bring you even more data-driven, science-based plant care! The Greg team and I agree that plant care should be highly personalized, because no two plants or environments are alike. So we both emphasize […]</Text>
       <Text style={styles.link} onPress={() => Linking.openURL('https://www.houseplantjournal.com/meet-greg/')}>Click here to read more{'\n'}</Text>
       
       <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 35,
    width:'83%',
  }}
/>
<Image
        style={styles.image}
        source={require('../../../assets/images/disc3.jpg')}
        resizeMode='contain'  
      />


<Text style={styles.title}>WHAT HOPE DO WE HAVE?</Text>
       <Text style={styles.details} >It’s time for a serious look at our expectations of houseplant care.</Text>
       <Text style={styles.link} onPress={() => Linking.openURL('https://www.houseplantjournal.com/what-hope-do-we-have/')}>Click here to read more{'\n'}</Text>
       
       <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 35,
    width:'83%',
  }}
/>

<Image
        style={styles.image}
        source={require('../../../assets/images/disc2.jpg')}
        resizeMode='contain'  
      />


       <Text style={styles.title}>FERTILIZERS FOR MOST PLANTS</Text>
       <Text style={styles.details} >When your houseplants get adequate light, they will use up water and soil nutrients. You replenish the water by regular watering but nutrients gradually get depleted from the soil. Light drives the production of sugars, which are made from water and carbon dioxide but the physical plant structures and all the cell processes require other […]</Text>
       <Text style={styles.link} onPress={() => Linking.openURL('https://www.houseplantjournal.com/fertilizer-for-most-houseplants/')}>Click here to read more{'\n'}</Text>
       
       <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 35,
    width:'83%',
  }}
/>
<Image
        style={styles.image}
        source={require('../../../assets/images/disc4.jpg')}
        resizeMode='contain'  
      />


       <Text style={styles.title}>SAVING THE PLANTS OF THE WORLD</Text>
       <Text style={styles.details} >The biodiversity crisis is growing increasingly dire as
more species become threatened with extinction through
habitat loss, pollution, and climate change. NYBG
has a central role in saving the world’s plants through
research, conservation, education, and training.</Text>
       <Text style={styles.link} onPress={() => Linking.openURL('https://www.nybg.org/content/uploads/2017/05/ScienceBook_2017.pdf')}>Click here to view full pdf{'\n'}</Text>
       
       <View
  style={{
    borderBottomColor: '#E5E5E6',
    borderBottomWidth: 2,
    marginLeft: 35,
    width:'83%',
  }}
/>
      


   
        <Text style={styles.footer}>© 2021 Microp Team{'\n'}Reference:https://www.houseplantjournal.com/blog/?fbclid=IwAR0s-ipqfalr-0wv33KZgJ8GQxIyirfHXkZhYwxLcA1PQ5Xz8mmWrxGFR0M{'\n'}Reference:https://www.nybg.org/content/uploads/2017/05/ScienceBook_2017.pdf</Text>
        
      </View>
      </ScrollView>
    );
    
  }
  
}
