import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Dictionary from '../screens/dictionary';
import WordDefn from '../screens/wordDefn';
import Header from '../shared/header';

const screens = {
    Dictionary: {
        screen: Dictionary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Dictionary' navigation={navigation} />
            }
        },
    },
    WordDefn: {
        screen: WordDefn,
        navigationOptions: {
            title: 'Word Definition',
        }
    },
};

// home stack navigator screens
const DictionaryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default DictionaryStack;


