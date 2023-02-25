import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Languages from '../screens/languages';
import Header from '../shared/header';



const screens = {
    Languages: {
        screen: Languages,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Languages' navigation={navigation} />
            }
        },
    },
}

const LanguagesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default LanguagesStack;