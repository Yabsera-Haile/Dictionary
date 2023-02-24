import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import EditLanguage from '../screens/editLanguage';
import Header from '../shared/header';


const screens = {
    EditLanguage: {
        screen: EditLanguage,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='EditLanguage' navigation={navigation} />
            }
        },
    },
}

const EditLanguageStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default EditLanguageStack;