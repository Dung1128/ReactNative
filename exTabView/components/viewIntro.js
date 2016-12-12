import React, { Component } from 'react';
import { Container, Content,View, Tabs,Text } from 'native-base';
export default class viewIntro extends Component {
    render() {
        return (
            <Container>
                <Content>
                  <View style={{paddingLeft:30, paddingTop:10,paddingRight:30,}}>
                    <Text>
                      Studies Công nghệ thông tin at Viện Đại Học Mở Hà Nội
                    </Text>
                  </View>
                </Content>
            </Container>
        );
    }
}
