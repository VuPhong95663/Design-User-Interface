import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component{
    render(){
        return (
            <View>
                <Text>OrderHistory</Text>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_Main')}}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}