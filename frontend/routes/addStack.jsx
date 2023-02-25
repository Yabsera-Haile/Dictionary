import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AddContent from '../screens/updateWord';
import Header from '../shared/header';


const screens = {
    Favorites: {
        screen: AddContent,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='' navigation={navigation} />
            }
        },
    },
}

const AddStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default AddStack;