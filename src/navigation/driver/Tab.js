import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icons you need
import { ThemeProvider } from '../../Theme/ThemeContext';
import Home from '../../screen/driver/Home';
import Settings from '../../screen/driver/Setting';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <ThemeProvider>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline'; // Icon name for Home tab
            } else if (route.name === 'Setting') {
              iconName = 'settings-outline'; // Icon name for Setting tab
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Setting" component={Settings} />
      </Tabs.Navigator>
    </ThemeProvider>
  );
}

export default Tab;
