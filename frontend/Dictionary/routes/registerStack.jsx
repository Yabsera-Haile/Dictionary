import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Register from '../screens/register';
import EditDictionary from '../screens/editDictionary';
import Header from '../shared/header';

const screens = {
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
        }
    },
    EditDictionary: {
        screen: EditDictionary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Edit Dictionary' navigation={navigation} />
            }
        },
    },
};

// home stack navigator screens
const RegisterStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default RegisterStack;


