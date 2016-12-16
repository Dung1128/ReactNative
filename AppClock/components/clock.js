import React, {
    Component,
    StyleSheet,
    PropTypes,
    View, Text,
    TouchableOpacity
} from 'react-native';
import {
    Subheader,
    Avatar,
    COLOR
} from 'mrn';
var Sound = require('react-native-sound');
const timer = require('react-native-timer');
import TimerMixin from 'react-timer-mixin';
export default class clock extends Component {
    constructor(props) {
        super(props);
        this.state={
          h:1,
          m:00,
          s:00,
          flag:false,
          runnning:false,
          ringring: true
        };
            var s;
    }


    _run(){
      if(this.state.h<=0 && this.state.m<=0 && this.state.s<=0)
      {
        this.setState({flag:true})
        clearInterval(this.interval);
        this._playRingRing();
        return
      }
     if(this.state.s <=0 ){
       if(this.state.m <=0){
         this.setState({m: 3,running:true,h:--this.state.h})
       }
       this.setState({s:99, m:--this.state.m,running:true})
     }
     this.setState({s:--this.state.s, running:true})
   }

   _start(){
     if(this.state.running){
       clearInterval(this.interval);
       this.setState({running:false})
       return
     }
       this.interval = setInterval(()=>{this._run()},1);

   }

   _add(){

     if(this.state.h<=0 && this.state.m<=0 && this.state.s<=0){
       this.setState({h:++this.state.h,flag:false,ringring:false})
       s.stop();
       this.setState({running:false})
     }
     this.setState({h:++this.state.h})
   }
   _restart(){
     this.setState({h:15, m:00, s:00, flag:false,ringring:false})
     s.stop();
     this.setState({running:false})
   }
   _playRingRing(){
     if(this.state.flag==true){
       s = new Sound ('chuongbao.mp3', Sound.MAIN_BUNDLE, (e) => {
       if (e) {
         console.log('error', e);
       } else {
         console.log('duration', s.getDuration());
           s.play();
         }
       }
     );
     }
   }

    render(){
        return(
          <View style={{flex: 1, padding:5}}>
            <View style ={{flex: 4, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:50, fontWidth:'bold', color:'#212121'}}>
                  {this.state.h<10?'0'+this.state.h:this.state.h}:{this.state.m<10?'0'+this.state.m:this.state.m}:{this.state.s<10?'0'+this.state.s:this.state.s}
              </Text>
            </View>
            <View style={{flex:1}}>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <TouchableOpacity style={this.state.running ? Style.stopButton:Style.startButton}
                          onPress={()=>this._start()}>
                    <Text>{this.state.running ?'STOP':'START'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                          flex:1,
                          backgroundColor:'#ffeb3b',
                          alignItems:'center',
                          borderWidth:0.5,
                          borderColor:'white',
                          justifyContent:'center'}}
                          onPress={()=>this._add()}>
                    <Text>ADD
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                          flex:1,
                          backgroundColor:'607d8b',
                          alignItems:'center',
                          borderWidth:0.5,
                          borderColor:'white',
                          justifyContent:'center'}}
                          onPress={()=>this._restart()}>
                    <Text>RESTART
                    </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        );
    }
}

const Style = StyleSheet.create({
    startButton: {
      flex:1,
      backgroundColor:'#4caf50',
      alignItems:'center',
      borderWidth:0.5,
      borderColor:'white',
      justifyContent:'center'
    },
    stopButton: {
      flex:1,
      backgroundColor:'#f44336',
      alignItems:'center',
      borderWidth:0.5,
      borderColor:'white',
      justifyContent:'center'
    }
});
