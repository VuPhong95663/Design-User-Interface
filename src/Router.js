import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Main from './Screens/Main/Main';
import Menu from './Screens/Main/Menu';
import Authentication from './Screens/Authentication/Authentication';
import OrderHistory from './Screens/OrderHistory/OrderHistory';
import ChangeInfo from './Screens/ChangeInfo/ChangeInfo';
import Category from './Screens/Main/Shop/Category';
import Search from './Screens/Main/Shop/Search';
import Contact from './Screens/Main/Shop/Contact';
import { Icon } from 'native-base';

const { width } = Dimensions.get('window')
export const HomeStack = StackNavigator({
    ManHinh_Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }

    },
    ManHinh_Authentication: {
        screen: Authentication
    },
    ManHinh_OrderHistory: {
        screen: OrderHistory
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo
    },
},
    {

    }
)

export const TabBar = TabNavigator({
    ManHinh_Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Trang chủ',
            tabBarIcon: ({ tinColor }) => (<Icon name='home' style={{color: '#FFF'}} />),
        }
    },
    ManHinh_Category: {
        screen: Category,
        navigationOptions: {
            title: 'Danh mục',
            tabBarIcon: ({ tinColor }) => (<Icon name='list' style={{color: '#FFF'}} />),

        }
    },
    ManHinh_Search: {
        screen: Search,
        navigationOptions: {
            title: 'Tìm kiếm',
            tabBarIcon: ({ tinColor }) => (<Icon name='search' style={{color: '#FFF'}} />),
        }
    },
    ManHinh_Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Liên hệ',
            tabBarIcon: ({ tinColor }) => (<Icon name='contact' style={{color: '#FFF'}} />),
        }
    },

},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#FFF',
            labelStyle: {
                fontSize: 8,
                fontFamily: 'Avenir'
            },
            tabStyle: {
                width: width / 4,
            },
            style: {
                backgroundColor: '#34B089',
            },
            iconStyle: {
                
            }
        }

    }
)
export const SideMenu = DrawerNavigator({
    Tab: {
        screen: TabBar
    }
},
    {
        drawerWidth: 250,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
)

