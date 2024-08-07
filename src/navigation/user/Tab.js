import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screen/user/Home';
import Setting from '../../screen/user/Setting';
import { ThemeProvider } from '../../Theme/ThemeContext';

const Tabs = createBottomTabNavigator();

const Tab = () => {
    return (

        <ThemeProvider>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" color={color} size={size} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tabs.Navigator>

        </ThemeProvider>

    );
}

export default Tab;
