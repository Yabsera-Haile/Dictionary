import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import WordDefn from '../screens/wordDefn';
import Header from '../shared/header';



const screens = {
    WordDefn: {
        screen: WordDefn,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Word Definition' navigation={navigation} />
            }
        },
    },
}

const WordDefnStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default WordDefnStack;