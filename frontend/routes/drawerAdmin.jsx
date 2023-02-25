import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import EditDictionary from "./editDictionary"
import EditLanguage from './editLanguage';
import DictionaryStack from './dictionaryStack';
import RegisterStack from './registerStack';
import AddStack from './addStack';
// import LogoutStack from './logout';

const RootDrawerNavigator = createDrawerNavigator({
    Add: {
        screen: AddStack,
    }, 
    EditDictionary: {
        screen: EditDictionary,
    },
    Register: {
        screen: RegisterStack
        ,
    },
    EditLanguage: {
        screen: EditLanguage,
    },
    Logout: {
        screen: DictionaryStack,
    },


});

export default createAppContainer(RootDrawerNavigator);