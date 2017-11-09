import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangInfo extends Component{
    render(){
        return (
            <View>
                <Text>ChangInfo</Text>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_Main')}}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}
