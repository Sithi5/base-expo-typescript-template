/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import {
    BottomTabNavigationProp,
    BottomTabScreenProps
} from '@react-navigation/bottom-tabs';
import {
    CompositeNavigationProp,
    CompositeScreenProps,
    NavigatorScreenParams
} from '@react-navigation/native';
import {
    NativeStackNavigationProp,
    NativeStackScreenProps
} from '@react-navigation/native-stack';
import { Id } from 'globals/types';

export type AuthStackParamList = {
    AuthModal: { type: 'register' | 'login' };
};

export type RootTabParamList = {
    Home: undefined;
    SearchStack: NavigatorScreenParams<SearchStackParamList> | undefined;
    SellStack: NavigatorScreenParams<SellStackParamList> | undefined;
    MessagesStack: NavigatorScreenParams<MessagesStackParamList> | undefined;
    Profile: undefined;
};

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    Camera: { max: number };
    NotFound: undefined;
    RedirectToLogin: undefined;
};

export type SearchStackParamList = {
    SearchCategory: undefined;
    SearchSubCategory: { id: Id; name: string };
    SearchListing: undefined;
};

export type SellStackParamList = {
    Sell: undefined;
    SellCongrats: undefined;
    BecomeSeller: undefined;
    BecomeSellerCongrats: undefined;
};

export type MessagesStackParamList = {
    Texting: NavigatorScreenParams<TextingStackParamList> | undefined;
    Conversation: { id: Id };
    ConversationProduct: { id: Id };
};

export type TextingStackParamList = {
    Messages: undefined;
    Notifications: undefined;
};

// Screen props

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, Screen>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;

export type SearchStackScreenProps<Screen extends keyof SearchStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<SearchStackParamList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;

export type SellStackScreenProps<Screen extends keyof SellStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<SellStackParamList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;

export type MessagesStackScreenProps<
    Screen extends keyof MessagesStackParamList
> = CompositeScreenProps<
    NativeStackScreenProps<MessagesStackParamList, Screen>,
    BottomTabScreenProps<RootTabParamList>
>;

export type TextingStackScreenProps<
    Screen extends keyof TextingStackParamList
> = CompositeScreenProps<
    NativeStackScreenProps<TextingStackParamList, Screen>,
    BottomTabScreenProps<RootTabParamList>
>;

// Navigation prop

export type RootTabNavigationProp<Navigation extends keyof RootTabParamList> =
    BottomTabNavigationProp<RootTabParamList, Navigation>;

export type SearchStackNavigationProps<
    Navigation extends keyof SearchStackParamList
> = CompositeNavigationProp<
    NativeStackNavigationProp<SearchStackParamList, Navigation>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type SearchCategoryScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<SearchStackParamList, 'SearchCategory'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type SellStackNavigationProps<
    Navigation extends keyof SellStackParamList
> = CompositeNavigationProp<
    NativeStackNavigationProp<SellStackParamList, Navigation>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type SellScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<SellStackParamList, 'Sell'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type MessagesStackNavigationProps<
    Navigation extends keyof MessagesStackParamList
> = CompositeNavigationProp<
    NativeStackNavigationProp<MessagesStackParamList, Navigation>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type TextingStackNavigationProps<
    Navigation extends keyof TextingStackParamList
> = CompositeNavigationProp<
    NativeStackNavigationProp<TextingStackParamList, Navigation>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type ConversationScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<MessagesStackParamList, 'Conversation'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type ConversationProductScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<MessagesStackParamList, 'ConversationProduct'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type MessagesScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TextingStackParamList, 'Messages'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

export type NotificationsScreenNavigationProps = CompositeNavigationProp<
    NativeStackNavigationProp<TextingStackParamList, 'Notifications'>,
    RootTabNavigationProp<keyof RootTabParamList>
>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}