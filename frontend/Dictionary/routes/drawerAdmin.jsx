import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import EditDictionary from "./editDictionary"
import EditLanguage from './editLanguage';
// import LogoutStack from './logout';

const RootDrawerNavigator = createDrawerNavigator({
    EditDictionary: {
        screen: EditDictionary,
    },
    EditLanguage: {
        screen: EditLanguage,
    },
    // Logout: {
    //     // screen: LogoutStack,
    // },

});

export default createAppContainer(RootDrawerNavigator);