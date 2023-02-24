import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Login from '../apps/Screens/login';
import Header from '../shared/header';


const screens = {
    Favorites: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='' navigation={navigation} />
            }
        },
    },
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default LoginStack;