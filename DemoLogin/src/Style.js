import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    flex: 2,
  },
  txtTit:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:150,
  },
  input:{
    flex: 2
  },
  txtInput:{
    borderWidth:0.5,
    borderColor:'#607D8B',
    borderRadius:5,
    marginTop:15,
    marginRight:25,
    marginLeft:25
  },
  login:{
    flex: 0.5,
  },
  btnLogin:{
    flex:1,
    borderWidth:0.5,
    borderRadius:5,
    borderColor:'#CFD8DC',
    marginTop:12,
    marginBottom:12,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#CFD8DC',
  },
  txtButton:{
    textAlign: 'center',
    fontWeight:'bold',
    marginTop:10,

  }
});

export default Style;
