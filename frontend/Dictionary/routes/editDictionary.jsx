import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Contributor from '../screens/contributor';
import EditDictionary from '../screens/editDictionary';
import Header from '../shared/header';


const screens = {
    EditDictionary: {
        screen: EditDictionary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Edit Dictionary' navigation={navigation} />
            }
        },
    },
    // UpdateWord: {
    //     screen: UpdateWord,
    //     navigationOptions: {
    //         title: 'UpdateWord',
    //     }
    // },
}

const EditDictionaryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 },
    }
});

export default EditDictionaryStack;