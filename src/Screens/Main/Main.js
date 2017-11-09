import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../Component/Header'
import { Container } from 'native-base';
export default class Main extends Component{
    render(){
        return (
            <View>
                <Header 
                onOpen={() =>this.props.navigation.navigate('DrawerToggle')}/>
                {/* <Text>Main</Text>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_Authentication')}}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_ChangeInfo')}}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_OrderHistory')}}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('DrawerToggle')}}>
                    <Text>Go to Menu</Text>
                </TouchableOpacity> */}
            </View>
        ); 
    }
}
