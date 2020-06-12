import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import ListItem from './ListItem';

const width = Dimensions.get("window").width

export default class HomeScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        };
    }


    componentDidMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({data: response.data}))
    }

    render() {
        return (
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <FlatList 
                    data = {this.state.data}
                    renderItem = {(data) => <ListItem {...data.item} navigation={this.props.navigation}/>}
                    keyExtractor={(item) => item.title}
                />
                
            </View>
          );
        
    }
}
