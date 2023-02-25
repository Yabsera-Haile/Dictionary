import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Register from '../apps/Screens/Register';
import Header from '../shared/header';


const screens = {
    Favorites: {
        screen: Register,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='' navigation={navigation} />
            }
        },
    },
}

const RegisterStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default RegisterStack;