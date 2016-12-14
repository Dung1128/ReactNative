import React,{Component} from 'react';
import { TouchableWithoutFeedback,StyleSheet,View, Tex,AppRegistry,Text,TouchableOpacity } from 'react-native';
var Sound = require('react-native-sound');

export default class helloWord extends Component {
  render() {
    return <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}>play</Text>
             </TouchableOpacity>
           </View>;
  }

  playSound() {
    var s = new Sound('aichoai.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});
AppRegistry.registerComponent('helloWord', () => helloWord);
