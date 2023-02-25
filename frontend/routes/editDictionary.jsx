import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import EditWordDefn from '../screens/editWordDefn';
import EditDictionary from '../screens/editDictionary';
import Header from '../shared/header';


const screens = {
    EditDictionary: {
        screen: EditDictionary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='EditDictionary' navigation={navigation} />
            }
        },
    },
    EditWordDefn: {
        screen: EditWordDefn,
        navigationOptions: {
            title: 'EditWordDefn',
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