import React, { useState, useEffect} from 'react';
import { FlatList, ScrollView, Text, View, Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {


  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    backgroundColor: 'red',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Plants', { item });
  };

  renderRecipes = ({ item }) => (
    
      
      <View >
        
        <TouchableOpacity style={styles.container} onPress={() => this.onPressRecipe(item)}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </TouchableOpacity>
      </View>
     
  );

  render() {
    return (
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius:40,borderBottomRightRadius:40,backgroundColor: '#5D9742',}}>
        
                <Text style={{ color: 'white',alignSelf:'baseline', marginLeft:17, marginTop:10,marginBottom:20,fontSize:30}} >Plant of the Day</Text>
                <View style={{flexDirection:'row', }}>
                <Image
                    source={require('../../../assets/images/plant1.jpg')}
                    resizeMode="cover"
                    style={{
                      // marginRight:150,
                        width: 185,
                        height: 300,
                        borderRadius: 15,
                        backgroundColor:'#5D9742',
                        marginRight:2,
                    }}
                />
                <View style={{flexDirection:'column'}}>
                <Image
                    source={require('../../../assets/images/plant2.jpg')}
                    resizeMode="cover"
                    
                    style={{
                        width: 155,
                        height: 150,
                        borderRadius: 25,
                        backgroundColor:'#5D9742',
                        
                    }}
                />
                <Image
                    source={require('../../../assets/images/plant3.jpg')}
                    resizeMode="cover"
  
                    style={{ 
                      marginTop:2,
                        width: 155,
                        height: 150,
                        borderRadius: 25,
                        backgroundColor:'#5D9742',
                        
                    }}
                />
                </View>
  </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: '28%',
                        left: 0,
                        backgroundColor: '#274119',
                        paddingHorizontal: 45,
                        paddingVertical:10,
                        borderTopRightRadius: 25,
                        borderBottomRightRadius: 25,
                    }}
                >
                    <Text style={{ color: 'white', fontSize:30}}>ASTRALIA</Text>
                </View>

                {/* <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: 7,
                    }}
                    onPress={() => { console.log("Focus on pressed") }}
                >
                    <Image
                        source={require('../../../assets/Microp_logo.png')}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity> */}

<Text style={{ color: 'white',alignSelf:'baseline', marginLeft:20, marginTop:90, fontWeight:'bold', fontSize:17}} >When it blooms: <Text style={{fontWeight:'normal'}}>Spring to summer</Text></Text>
<Text style={{ color: 'white',alignSelf:'baseline', marginLeft:20,marginRight:50, marginTop:25, fontWeight:'bold', fontSize:17,textAlign: 'justify' }} >Why we love it: <Text style={{fontWeight:'normal'}}>This lesser-known perennial actually is an old-fashioned cottage garden favorite. Its pretty blooms last a long time and attract tons of pollinators. {"\n"}{"\n"}</Text></Text>

            </View>

      <View >
      <Text style={{ color: 'black',alignSelf:'baseline', marginLeft:20, marginTop:20,marginBottom:18,fontSize:30}} >Discover Plants</Text>
       
      
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
      </ScrollView>
    );
  }
}
