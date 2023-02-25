import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Contributor from '../screens/contributor';
import Register from '../screens/register';
import Header from '../shared/header';


const screens = {
    Contributor: {
        screen: Contributor,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Contributor' navigation={navigation} />
            }
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
        }
    },
}

const ContributorStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default ContributorStack;