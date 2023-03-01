import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import EditDictionary from "./editDictionary"
import EditLanguage from './editLanguage';
import DictionaryStack from './dictionaryStack';
import RegisterStack from './registerStack';
import AddStack from './addStack';
import AddLang from './addLang';

// import LogoutStack from './logout';

const RootDrawerNavigator = createDrawerNavigator({
    "Add Word": {
        screen: AddStack
    }, 
    "Add Language": {
        screen: AddLang
    }, 
    "Delete Word": {
        screen: EditDictionary,
    },
    "Delete Language": {
        screen: EditLanguage,
    },
    "Register User": {
        screen: RegisterStack
    
    },
    "Logout": {
        screen: DictionaryStack,
    },


},{drawerType :  'slide' , hideStatusBar : true});

export default createAppContainer(RootDrawerNavigator);