import React from 'react';
import { View , Image, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { Dialog} from "react-native-simple-dialogs";
export default class DrawerContainer extends React.Component {
  state = {}

    openDialog = (show) => {
        this.setState({ showDialog: show });
    }
    
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        
        <View style={styles.container}>
        
          <MenuButton
            title="Home"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Categories"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Search"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Discussions"
            source={require('../../../assets/icons/discussion.png')}
            onPress={() => {
              let title = 'Discussions';
                navigation.navigate('Discussion', { title });
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="FAQs"
            source={require('../../../assets/icons/question.png')}
            onPress={() => {
              let title = 'Frequently Asked Questions';
                navigation.navigate('FAQ', { title });
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="About App"
            source={require('../../../assets/icons/info.png')}
            onPress={() => {
              this.openDialog(true);
              navigation.closeDrawer();

            }}

          />  
          <Dialog
                    
                    animationType="fade"
                    contentStyle={{
                        
                        
                    }}
                    onTouchOutside={() => this.openDialog(false)}
                    visible={this.state.showDialog}
                >
                    <View style={{flexDirection:'row', }}>
                    <Image
                        source={require('../../../assets/M_LOGO.png')}
                        style={{
                          alignSelf:'flex-start',
                            width: 100,
                            height: 100,
                            marginTop: 10,
                            resizeMode: "contain",
                        }}
                    />
                    <Text style={{textAlign:'justify', marginLeft:10 }}>{'\n'}<Text style={{fontSize:25,fontWeight:'bold' }}>Microp App</Text>{'\n'}
                    Version 0.0.4{'\n'}{'\n'}
                    <Text style={{color:'gray', }}>© 2021 Microp Team</Text>
                    </Text>
                    </View>
                    <Text style={{ marginVertical: 20, textAlign:'justify' }}>
                        Microp is a simple plant dictionary app created by Justine Camacho, Erick Domingo and Ronald Lagao. {'\n'}{'\n'}
                        By using this application, you agree to the <Text style={styles.green}>End User License Agreement.</Text>
                    </Text>

                    <Text
                      style={styles.btnRight}
                        onPress={() => this.openDialog(false)}
                       
                    >CLOSE</Text>

                </Dialog>
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
