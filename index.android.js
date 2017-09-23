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
    SectionList,
} from 'react-native';

export default class JEEK_Client extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        return <Text
            style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    };

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#6b80e3', color: 'white', fontSize: 30 }}>{txt}</Text>
    };

    render() {
        var sections = [
            { key: "HTML", data: [{ title: "HTML" }] },
            { key: "CSS", data: [{ title: "CSS" }]},
            { key: "JavaScript", data: [{ title: "JavaScript" }] },
            { key: "Node.js", data: [{ title: "Node.js" }] },
            { key: "Database", data: [{ title: "Database" }] },
            { key: "Philosophy", data: [{ title: "Philosophy" }] },
        ];

        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('JEEK_Client', () => JEEK_Client);
