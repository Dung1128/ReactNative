import React, { Component } from 'react';
import { Container, Content,View, Tabs,Text } from 'native-base';
export default class viewProfile extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{paddingLeft:30,paddingRight:30, paddingTop:10}}>
                      <Text>
                        Name: Nguyễn Trần Dũng
                      </Text>
                      <Text>
                        DoB: 11/28/1995
                      </Text>
                      <Text>
                        Email: trandung1128@gmail.com
                      </Text>
                      <Text>
                        Address: Vĩnh Phúc
                      </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}
