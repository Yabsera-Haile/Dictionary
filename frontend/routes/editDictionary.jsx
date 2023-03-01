import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import EditWord from '../screens/editWordDefn';
import EditDictionary from '../screens/editDictionary';
import Header from '../shared/header';


const screens = {
    EditDictionary: {
        screen: EditDictionary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Edit Dictionary' navigation={navigation} />
            }
        },
    },
    EditWord: {
        screen: EditWord,
        navigationOptions: {
            title: 'Edit Word',
        }
    },
}

const EditDictionaryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default EditDictionaryStack;