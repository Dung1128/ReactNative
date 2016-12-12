import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,  Card, CardItem, Thumbnail, Text, Button, Icon,View } from 'native-base';
import { Image } from 'react-native';
export default class cpCardView extends Component {

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
          <Text> Component Card View
          </Text>
        </Header>
          <Content style={{padding:20}}>
            <View>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>
            <View style={{padding:2}}>
              <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../img/github.png')} />
                            <Text>Dungnt</Text>
                        </CardItem>

                        <CardItem>
                            <Image style={{ resizeMode: 'cover', width: null }} source={require('../img/react2.png')} />
                        </CardItem>

                        <CardItem>
                            <Button transparent>
                                <Icon name="logo-github" />
                                1,926
                            </Button>
                        </CardItem>
                   </Card>
            </View>
          </Content>

        </Container>
      );
    }
}
