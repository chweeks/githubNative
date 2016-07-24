import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
        container: {
            marginTop: 65,
            flex: 1
        },
        image: {
            height: 350
        },
        buttonText: {
            fontSize: 24,
            color: 'white',
            alignSelf: 'center'
        }
})


export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Dashboard View </Text>
                <Text> {this.props.userInfo.name} </Text>
                <Text> {this.props.userInfo.email} </Text>
            </View>
        )
    }
};
