/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class JPBS_Client extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    JPBS
                </Text>
                <Text style={styles.detail}>
                    建平弹幕
                </Text>
                <TextInput
                    placeholder="输入弹幕"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    detail: {
        textAlign: 'center',
        color: '#333333',
    },
});

AppRegistry.registerComponent('JPBS_Client', () => JPBS_Client);
