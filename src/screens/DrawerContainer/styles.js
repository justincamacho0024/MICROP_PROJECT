
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
  btnRight:{
    fontSize:15,
    fontWeight:'bold',
    alignSelf:'flex-end',
    marginTop:5,
    color:'green',
  },
  green:{
    color:'green',
  }
});

export default styles;
