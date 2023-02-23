import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Favorites from '../screens/favorites';
import Header from '../shared/header';


const screens = {
    Favorites: {
        screen: Favorites,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Favorites' navigation={navigation} />
            }
        },
    },
}

const FavoritesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default FavoritesStack;