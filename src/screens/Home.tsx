import React from 'react';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeFragment from './fragments/HomeFragment';
import FavoritesFragment from './fragments/FavoritesFragment';
import ProfileFragment from './fragments/ProfileFragment';
import CartFragment from './fragments/CartFragment';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.bottomNav,
                tabBarActiveTintColor: '#FF6C44',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeFragment}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartFragment}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="shopping-cart" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesFragment}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="heart" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileFragment}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Home() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Main" component={BottomTabs} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: '#000',
        borderTopWidth: 0,
        paddingBottom: 50,
        paddingTop: 10
    }
});
