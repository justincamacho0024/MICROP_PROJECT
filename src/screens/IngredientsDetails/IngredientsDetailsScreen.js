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

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    
      <View>
        <TouchableOpacity style={styles.container} onPress={() => this.onPressIngredient(item[0])}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
        </TouchableOpacity>
      </View>
    
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View>
        <FlatList
        style={{marginLeft:60,marginRight: 15
        }}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
