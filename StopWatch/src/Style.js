import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
  container:{
    flex: 1,
    padding:5,
    flexDirection:'column'
  },
  title:{
    alignItems:'center',
    justifyContent:'center'
  },
  txtTitle:{
    fontSize:30,
    fontWeight:'bold'
  },
  body:{
    flex: 0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  txtMinutes:{
    fontSize:70,
    flex:1,
    fontWeight:'bold',
    color:'#212121'
  },
  txtSeconds:{
    fontSize:50,
    flex:1,
    fontWeight:'bold',
    color:'#212121'
  },
  buttonView:{
    flex:2,
    paddingTop: 50
  },
  btn:{
    width: 80,
    height: 80,
    alignItems:'center',
    justifyContent:'center'
  },
  txtBtn:{
    color:'white'
  },

});
export default Style;
