import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screen
import Home from './Screens/HomeScreen.js';
import Qr from './Screens/QrScreen.js';
import Call from './Screens/CallScreen.js';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'black',
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" size={30} color={color} />
                    ),
                    tabBarLabel: '',
                    headerShown: false,
                }}

            />
            <Tab.Screen
                name="Qr"
                component={Qr}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="qrcode-scan" size={30} color={color} />
                    ),
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Call"
                component={Call}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="phone-call" size={30} color={color} />
                    ),
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}
export default Navigation;