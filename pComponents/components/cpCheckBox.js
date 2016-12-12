import React, { Component } from 'react';
import { Container, Header, Title,List,CheckBox, Content,ListItem, Footer, FooterTab, Button, Icon,Text,View } from 'native-base';

export default class cpCheckBox extends Component {

  constructor(props){
    super(props);
    this.state = {
            check1: false,
            check2: false,
            check3: false
        };
        console.log(this.state.check);
  }

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }
  _check1(){
    if(this.state.check1 == false)
      {
        this.setState({check1: true})
      }
      else {
        this.setState({check1: false})
      }
  }
  _check2(){
    if(this.state.check2 == false)
      {
        this.setState({check2: true})
      }
      else {
        this.setState({check2: false})
      }
  }
  _check3(){
    if(this.state.check3 == false)
      {
        this.setState({check3: true})
      }
      else {
        this.setState({check3: false})
      }
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Component Check Box
          </Text>
        </Header>
        <Content style={{padding:10}}>
          <View>
            <Button info onPress={this.navigate.bind(this,'root')}>
               Previous
               <Icon name='ios-arrow-back' />
             </Button>
          </View>
          <View style={{paddingLeft:10,paddingTop:10,paddingRight:10}}>
            <Text style={{fontSize:20}}>
              What is your hobby?
            </Text>
          </View>
          <View style={{padding:10}}>
            <List>
                <ListItem>
                    <CheckBox checked={this.state.check1} onPress={()=>this._check1()} />
                    <Text>Playing game</Text>
                </ListItem>
                <ListItem>
                    <CheckBox checked={this.state.check2} onPress={()=>this._check2()} />
                    <Text>Reading book</Text>
                </ListItem>
                <ListItem>
                    <CheckBox checked={this.state.check3} onPress={()=>this._check3()} />
                    <Text>Listen to music</Text>
                </ListItem>
            </List>
          </View>
        </Content>
        </Container>
      );
    }
}
