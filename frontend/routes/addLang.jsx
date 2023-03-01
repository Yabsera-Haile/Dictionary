import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AddLanguage from '../screens/addLanguage';
import Header from '../shared/header';


const screens = {
    Favorites: {
        screen: AddLanguage,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='' navigation={navigation} />
            }
        },
    },
}

const AddLang= createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default AddLang;