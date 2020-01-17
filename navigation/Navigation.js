import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BarcodeMenu from '../barcode/BarcodeMenu';
import BarcodeRead from '../barcode/BarcodeRead';
import BarcodeAdd from '../barcode/BarcodeAdd';
import Login from '../user/Login';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Login,
        navigationOptions: {
            title: 'Home'
        }
    },
    BarcodeMenu: {
        screen: BarcodeMenu,
        navigationOptions: {
            title: 'Barcode Menu'
        }
    },
    BarcodeRead: {
        screen: BarcodeRead,
        navigationOptions: {
            title: 'Read Barcode'
        }
    },
    BarcodeAdd: {
        screen: BarcodeAdd,
        navigationOptions: {
            title: 'Add Barcode'
        }
    },
});

export default createAppContainer(AppNavigator);