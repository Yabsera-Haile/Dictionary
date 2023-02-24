import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import EditDictionary from "./editDictionary"
import EditLanguage from './editLanguage';
import RegisterStack from './registerStack';
import DictionaryStack from './dictionaryStack';
// import LogoutStack from './logout';

const RootDrawerNavigator = createDrawerNavigator({
    EditDictionary: {
        screen: EditDictionary,
    },
    EditLanguage: {
        screen: EditLanguage,
    },
    Register: {
        screen: RegisterStack
        ,
    },
    Logout: {
        screen: DictionaryStack,
    },

    // Logout: {
    //     // onItemPress({ route, focused })
    //     screen: LogoutStack,
    // },

});

export default createAppContainer(RootDrawerNavigator);