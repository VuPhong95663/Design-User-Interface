import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../../Component/Header';
export default class Category extends Component{
    render(){
        return (
            <View>
                <Header />
                <Text>Category</Text>
                <TouchableOpacity
                onPress = {() => {this.props.navigation.navigate('ManHinh_Main')}}>
                    <Text>Go back Main</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}
