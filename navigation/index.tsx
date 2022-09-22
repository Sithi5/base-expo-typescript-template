/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { useAppSelector } from 'redux_toolkit/hooks';
import { AppDispatch } from 'redux_toolkit/store';
import { UserState } from 'redux_toolkit/UserSlice';
import RootNavigator from './RootNavigator';

type CheckForPersistingUserArgs = {
    user: UserState;
    dispatch: AppDispatch;
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const user = useAppSelector((state) => state.user);

    if (user.logged) {
        return (
            <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootNavigator />
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootNavigator />
            </NavigationContainer>
        );
    }
}
