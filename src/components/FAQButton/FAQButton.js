import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class FAQButton extends React.Component {
  render() {
    return (
      <TouchableOpacity  onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View FAQs</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

FAQButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
