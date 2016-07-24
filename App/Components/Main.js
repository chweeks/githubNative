import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';
import Api from '../Utils/api';
import Dashboard from './Dashboard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    searchInput: {
        height: 50,
        fontSize: 23,
        padding: 4,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "blue",
        textAlign: 'center',
        color: "black"
    }
});

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    handleChange(event) {
        this.setState({
            username: event.nativeEvent.text
        })
    }

    handleSubmit(event){
        this.setState({
            isLoading: true
        })
        Api.getBio(this.state.username)
            .then((res) => {
                if(res.message === 'Not Found'){
                    this.setState({
                        error: 'User Not Found',
                        isLoading: false
                    });
                }
                else {
                    this.props.navigator.push({
                        title: this.state.username,
                        component: Dashboard,
                        passProps: {userInfo: res}
                    });
                    this.setState({
                        isLoading: false,
                        error: false,
                        username: ''
                    })
                }
            })
    }

    render() {
        const error = this.state.error ? <Text> {this.state.error} </Text> : null;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Search for a Github User</Text>
                <TextInput style={styles.searchInput} value={this.state.username} onChange={this.handleChange.bind(this)} />
                <TouchableHighlight onPress={this.handleSubmit.bind(this)} underlayColor="white">
                    <Text>Search</Text>
                </TouchableHighlight>
                <ActivityIndicator
                    animating={this.state.isLoading}
                    size='large' />
                {error}
            </View>
        )
    }
};
