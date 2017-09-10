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
    TextInput,
    Button,
    Alert
} from 'react-native';
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class JEEK_Client extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    JEEK
                </Text>
                <Text>
                    建平弹幕系统（测试中）
                </Text>
                <TextInput
                    style={{height: 50,width: 150}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                {/*<Text style={{padding: 10, fontSize: 42}}>*/}
                    {/*{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}*/}
                {/*</Text>*/}
                <Button
                    onPress={onButtonPress}
                    title="发送弹幕"
                />
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
    welcome: {
        marginBottom: 20,
        fontSize: 40
    }
});

AppRegistry.registerComponent('JEEK_Client', () => JEEK_Client);
