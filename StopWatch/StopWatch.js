/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
var Sound = require('react-native-sound');
const timer = require('react-native-timer');
import TimerMixin from 'react-timer-mixin';
export default class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state={
          m:0,
          s:0,
          running:false,
          ringring: false,
          flag: false,
          lastPress: 0,
        };
        var alarm;
        var beep;
    }

   _playRingRing(){
         alarm = new Sound ('rengreng.mp3', Sound.MAIN_BUNDLE, (e) => {
         if (e) {
           console.log('error', e);
         } else {
           console.log('duration', alarm.getDuration());
             alarm.play();
           }
         }
       );
     }

     _playBeep(){
           beep = new Sound ('rengreng.mp3', Sound.MAIN_BUNDLE, (e) => {
           if (e) {
             console.log('error', e);
           } else {
             console.log('duration', beep.getDuration());
               beep.play();

             }
           }
         );
       }
     _addMinutes(){
      //  this._playBeep();
      //  if(this.state.flagBeep){
      //      this.setTimeout(function () {console.log('hello')
      //    }, 100);
      //    beep.stop();
      //    this.setState({flagBeep:false})
      //  }
       this.setState({flag:true})
       if(this.state.ringring){
         alarm.stop();
         this.setState({ringring:false})
         return
       }
       if(!this.state.running){
         if(this.state.m >= 99){
          this.setState({m:1})
         }
         else{
           this.setState({m:++this.state.m})
         }
       }
       this.setState({
       lastPress: new Date().getTime()
     })

     }
       _addSeconds(){
         var delta = new Date().getTime() - this.state.lastPress;
         if(delta < 1000) {
          if(this.state.running){
            clearInterval(this.interval);
            this.setState({running:false})
            return
          }
            this.setState({m:0,s:0})
      }
      else{
        this.setState({flag:true})
        if(this.state.ringring){
          alarm.stop();
          this.setState({ringring:false})
          return
        }
        if(!this.state.running)
        {
            if(this.state.s >= 59){
           this.setState({s:1})
          }
          else{
            this.setState({s:++this.state.s})
          }
        }
      }
       }

     _run(){
        if(this.state.m<=0 && this.state.s<=0)
        {
          clearInterval(this.interval);
          this.setState({ringring:true, running:false, flag: false})
          this._playRingRing();
          return
        }
         if(this.state.s <=0){
           this.setState({s: 60,m:--this.state.m, running:true})
         }
         this.setState({s:--this.state.s, running:true})
       }

       _start(){
        //  this._playBeep();
         if(this.state.flag){
          if(this.state.running){
            clearInterval(this.interval);
            this.setState({running:false})
            return
          }
          else{
            if(this.state.ringring){
              alarm.stop();
              this.setState({ringring:false})
              return
            }
          }
              this.interval = setInterval(()=>{this._run()},1000);
            }
            else {
              if(this.state.ringring){
                alarm.stop();
                this.setState({ringring:false})
                return
              }
            }
       }

    render(){
        return(
          <View style={{flex: 1, padding:5, flexDirection:'column'}}>
              <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>
                  TANITA
                </Text>
              </View>
              <View style ={{flex: 0.5,flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                  <View >
                    <Text style={{fontSize:70,flex:1, fontWeight:'bold', color:'#212121'}}>
                        {this.state.m<10?'0'+this.state.m:this.state.m}
                    </Text>
                  </View>
                  <View>
                          <Text style={{fontSize:50,flex:1, fontWeight:'bold', color:'#212121'}}>
                            {this.state.s<10?'0'+this.state.s:this.state.s}
                          </Text>
                          <View style={{flexDirection:'row'}}>

                            <Text style={{fontWeight:'bold'}}>
                              M
                            </Text>
                            <Text style={{fontWeight:'bold', paddingLeft:30}}>
                              S
                            </Text>
                          </View>

                  </View>
              </View>

              <View style={{flex:2, paddingTop: 50}}>
                <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>

                  <View style={{flex:2, flexDirection:'row'}}>
                    <View style={{ flex:1}}>
                      <TouchableOpacity style={{
                                alignItems:'center',
                                justifyContent:'center'}} onPress={()=>this._addMinutes()}>
                          <Image style={{width: 80,height: 80, alignItems:'center', justifyContent:'center'}}
                            source={require('./images/button4.png')}>
                                <Text style={{color:'white'}}>Minutes
                                </Text>
                            </Image>
                      </TouchableOpacity>

                      </View>

                      <View style={{  flex:1}}>
                        <TouchableOpacity style={{
                                  alignItems:'center',
                                  justifyContent:'center'}} onPress={()=>this._addSeconds()}>
                            <Image style={{width: 80,height: 80, alignItems:'center', justifyContent:'center'}}
                              source={require('./images/button4.png')}>
                                  <Text style={{color:'white'}}>Seconds
                                  </Text>
                              </Image>
                        </TouchableOpacity>
                      </View>
                  </View>

                    <View style={{flex:1}}>
                      <TouchableOpacity style={{
                                alignItems:'center',
                                justifyContent:'center'}} onPress={()=>this._start()}>
                                <Image style={{width: 80,height: 80, alignItems:'center', justifyContent:'center'}}
                                  source={require('./images/button4.png')}>
                                      <Text style={{color:'white'}}>Start
                                      </Text>
                                      <Text style={{color:'white'}}>Stop
                                      </Text>
                                  </Image>
                      </TouchableOpacity>
                    </View>

                </View>
              </View>

              <View style={{flex:1}}>
              </View>



          </View>
        );
      }
}


module.exports = StopWatch;
