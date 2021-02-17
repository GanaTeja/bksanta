import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {TabNavigator} from './tabNavigator'
import CustomSideBarMenu from './customSideBar'
import SettingScreen from '../screens/settingScreen';
export const AppDrawer = createDrawerNavigator(
    {Home:{
        screen:TabNavigator
    },
    settings:{
        screen:SettingScreen
        },},
    {
        contentComponent:CustomSideBarMenu
    },
    {initialRouteName:'Home'}
)