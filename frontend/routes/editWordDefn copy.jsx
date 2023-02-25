import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import EditWordDefn from '../screens/wordDefn';
import Header from '../shared/header';



const screens = {
    EditWordDefn: {
        screen: EditWordDefn,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Edit Word Definition' navigation={navigation} />
            }
        },
    },
}

const EditWordDefnStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default EditWordDefnStack;