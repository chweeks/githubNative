import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
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
    makeBackground(btn) {
        const obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        };

        if(btn === 0){
            obj.backgroundColor = '#48BBEC';
        } else if (btn ===1){
            obj.backgroundColor = '#E77AAE';
        } else {
            obj.backgroundColor = '#758BF4';
        }
        return obj;
    }

    goToProfile() {
        console.log('Go to profile page');
    }

    goToRepos() {
        console.log('Go to repos');
    }

    goToNotes() {
        console.log('Go to notes');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: this.props.userInfo.avatar_url } }
                    style={styles.image} />
                <TouchableHighlight
                    onPress={this.goToProfile.bind(this)}
                    underlayColor={'#88D4F5'}
                    style={this.makeBackground(0)}>
                    <Text style={styles.buttonText}>
                        View Profile
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToRepos.bind(this)}
                    underlayColor={'#88D4F5'}
                    style={this.makeBackground(1)}>
                    <Text style={styles.buttonText}>
                        View Repos
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.goToNotes.bind(this)}
                    underlayColor={'#88D4F5'}
                    style={this.makeBackground(2)}>
                    <Text style={styles.buttonText}>
                        View Notes
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
};
