import React, { Component } from 'react';
import { Container,
        Header,
        Title,
        Content,
        Footer,
        FooterTab,
        Button, Icon,
        Text,View,
        InputGroup,
        Input
 } from 'native-base';

export default class cpSearch extends Component {

  constructor(){
    super();
    this.state={
      textChanged:''
    };
  }

  navigate(routeName){
    this.props.navigator.pop({
      name: routeName
    })
  }
  getChanged(event){
    this.setState({textChanged:event.nativeEvent.text})
  }

    render() {
      return (
        <Container>
        <Header>
          <Text> Component Search
          </Text>
        </Header>
          <Content style={{padding:10}}>
            <View>
              <Button info onPress={this.navigate.bind(this,'root')}>
                 Previous
                 <Icon name='ios-arrow-back' />
               </Button>
            </View>
            <View style={{padding:10}}>
              <Header searchBar rounded>
                   <InputGroup>
                       <Icon name="ios-search" />
                       <Input placeholder="Search" onChange={(event)=>this.getChanged(event)} />
                   </InputGroup>
                   <Button transparent>
                       Search
                   </Button>
               </Header>
               <Text>
                Your Search: {this.state.textChanged}
               </Text>
            </View>
          </Content>
        </Container>
      );
    }
}
