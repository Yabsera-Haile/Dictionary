import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import DictionaryStack from './dictionaryStack';
import LanguagesStack from './languagesStack';
import FavoritesStack from './favoritesStack';
import loginStack from './loginStack';


const RootDrawerNavigator = createDrawerNavigator({
    Dictionary: {
        screen: DictionaryStack,
    },
    Languages: {
        screen: LanguagesStack,
    },
    Favorites: {
        screen: FavoritesStack,
    },
    Contributor: {
        screen: loginStack,
    },
},{drawerType :  'slide' , hideStatusBar : true});

export default createAppContainer(RootDrawerNavigator);