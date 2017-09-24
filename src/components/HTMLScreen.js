import React from 'react';
import {
    Text,
    View
} from 'react-native';

class HTMLScreen extends React.Component {
    static navigationOptions = {
        title: 'HTML',
    };
    render() {
        return (
            <View>
                <Text>HTML教程</Text>
            </View>
        );
    }
}

export default HTMLScreen;