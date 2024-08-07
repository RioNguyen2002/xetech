import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/admin/Home';
import Setting from '../../screen/admin/Setting';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icons you need
import { ThemeProvider } from '../../Theme/ThemeContext';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <ThemeProvider>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; // Icon name for Home tab
            } else if (route.name === 'Setting') {
              iconName = 'settings'; // Icon name for Setting tab
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
        <Tabs.Screen name="Setting" component={Setting} />
      </Tabs.Navigator>
    </ThemeProvider>
  );
}

export default Tab;
