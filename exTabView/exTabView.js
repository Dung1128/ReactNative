import React, { Component } from 'react';
import { Container, Content, Tabs,Header,Title,Text } from 'native-base';
import ViewProfile from './components/viewProfile.js';
import ViewIntro from './components/viewIntro.js';

class exTabView extends Component {
    render() {
        return (
            <Container>
                <Content>
                  <Header>
                    <Title>Nguyễn Trần Dũng</Title>
                  </Header>
                  <Tabs>
                      <ViewProfile tabLabel='Profile' />
                      <ViewIntro tabLabel='Intro' />

                  </Tabs>
                </Content>
            </Container>
        );
    }
}
module.exports = exTabView;
