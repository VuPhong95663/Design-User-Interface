import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Menu extends Component{
    render(){
        return (
            <View>
                <Text>Menu</Text>
                {/* <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_Main')}}>
                    <Text>Go back Main</Text>
                </TouchableOpacity> */}
            </View>
        ); 
    }
}
