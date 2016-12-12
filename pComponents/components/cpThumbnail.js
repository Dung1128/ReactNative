import React, { Component } from 'react';
import { Container,
        Header,
        Title,
        Content,
        Footer,
        FooterTab,
        Button,
        Icon,Text,
        View,
        Thumbnail } from 'native-base';

export default class cpThumbnail extends Component {

  constructor(){
    super();
  }

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Component Thumbnail
          </Text>
        </Header>
          <Content style={{padding:20}}>
            <View>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>
            <View style={{padding:10}}>
                <Text>Square Thumbnail</Text>
                <View style={{paddingBottom:10}}>
                  <Thumbnail square source={require('../img/docker.png')} />
                </View>
                <View>
                  <Thumbnail square size={80} source={require('../img/docker.png')} />
                </View>
                <Text>Circular Thumbnail</Text>
                <View style={{paddingBottom:10}}>
                  <Thumbnail source={require('../img/im2.png')} />
                </View>
                <View>
                  <Thumbnail size={80} source={require('../img/im2.png')} />
                </View>
            </View>
          </Content>
        </Container>
      );
    }
}
