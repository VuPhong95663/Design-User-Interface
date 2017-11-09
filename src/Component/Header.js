import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input } from 'native-base';
import Search from './Search';

const { height } = Dimensions.get('window')
export default class HeaderExample extends Component {
  render() {
    const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
          <Icon name='menu' style={{color: '#FFF'}} />
          </TouchableOpacity>
          <Text style={titleStyle}>Mobiles World</Text>
          <Icon name='cart' style={{color: '#FFF'}} />  
        </View>
        <TextInput
          style={textInput}
          placeholder="Tìm kiếm sản phẩm"
          underlineColorAndroid="transparent"
          
        />
      </View>
      // <Container>
      //   <Header>
      //     <Left>
      //       <Button transparent
      //         onPress={this.props.onOpen} >
      //         <Icon name='menu' />
      //       </Button>
      //     </Left>
      //     <Body style={{ backgroundColor: '#FFF', borderRadius: 5, marginVertical: 10 }}>
      //       <Item>
      //         <Icon name="ios-search" />
      //         <Input placeholder="Search" />
      //       </Item>
      //     </Body>
      //     <Right>
      //       <Button transparent>
      //         <Icon name='cart' />
      //       </Button>
      //     </Right>
      //   </Header>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  textInput: {
    height: height / 23,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingVertical: 0
  },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
  iconStyle: { width: 25, height: 25 }
});
