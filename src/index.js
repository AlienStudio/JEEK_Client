import React from 'react';
import {
    Text,
    Button,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HTMLScreen extends React.Component {
    static navigationOptions = {
        title: 'HTML',
    };

    render() {
        return (
            <View>
                <Text>HTML</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    onPress={() => navigate('HTML')}
                    title="HTML"
                />
                <Button
                    onPress={() => navigate('CSS')}
                    title="CSS"
                />
                <Button
                    onPress={() => navigate('HTML')}
                    title="JavaScript"
                />
                <Button
                    onPress={() => navigate('HTML')}
                    title="Node.js"
                />
                <Button
                    onPress={() => navigate('HTML')}
                    title="Python"
                />
                <Button
                    onPress={() => navigate('HTML')}
                    title="Thoughts"
                />
                <Button
                    onPress={() => navigate('HTML')}
                    title="Android"
                />
            </View>
        )
    }
}

export default SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    HTML: {screen: HTMLScreen}
});