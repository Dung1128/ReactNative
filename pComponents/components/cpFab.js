import React, { Component } from 'react';
import { Container,
        Header,
        Title,
        Content,
        Footer,
        FooterTab,
        Button,
        Icon,

        Thumbnail,
        Fab } from 'native-base';
import{
  View,
  Text

}from 'react-native';

export default class CpFab extends Component {

  constructor(props){
    super(props);
    this.state ={
      active: 'true'
    };
  }

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }
  redirect(routeName){
    this.props.navigator.push({
      name: routeName,
      passProps: {
      }
    })
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Component Fab
          </Text>
        </Header>
          <View style={{padding:20, flex:1}}>
            <View style={{flex: 1}}>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>

            <View style={{flex: 5}}>
            <Fab
                    active={this.state.active}
                    direction="right"
                    containerStyle={{ marginLeft: 10 }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="topLeft"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="md-share" />

                    <Button style={{ backgroundColor: '#34A34F' }} onPress={this.redirect.bind(this,'call')}>
                        <Icon name="logo-whatsapp" />
                    </Button>

                    <Button style={{ backgroundColor: '#3B5998' }} onPress={this.redirect.bind(this,'facebook')}>
                        <Icon name="logo-facebook" />
                    </Button>

                    <Button style={{ backgroundColor: '#DD5144' }} onPress={this.redirect.bind(this,'email')}>
                        <Icon name="ios-mail" />
                    </Button>

                </Fab>
            </View>

          </View>
        </Container>
      );
    }
}
