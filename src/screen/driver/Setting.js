import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import React from 'react';
import { useTheme } from '../../Theme/ThemeContext';

const Settings = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
    navigation.navigate('SignIn'); // Navigate to sign-in screen or other appropriate action
  };

  return (
    <SafeAreaView style={[styles.safeAreaView, isDarkMode && styles.safeAreaViewDark]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>Settings</Text>
        
        <View style={[styles.settingItem, isDarkMode && styles.settingItemDark]}>
          <Text style={[styles.settingText, isDarkMode && styles.settingTextDark]}>Notifications</Text>
          <Switch
            value={true} // Update this based on your actual notification setting
            onValueChange={() => {}}
            trackColor={{ true: '#007BFF', false: '#DDDDDD' }}
            thumbColor={'#007BFF'}
          />
        </View>
        
        <View style={[styles.settingItem, isDarkMode && styles.settingItemDark]}>
          <Text style={[styles.settingText, isDarkMode && styles.settingTextDark]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ true: '#007BFF', false: '#DDDDDD' }}
            thumbColor={isDarkMode ? '#007BFF' : '#DDDDDD'}
          />
        </View>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Light mode background color
  },
  safeAreaViewDark: {
    backgroundColor: '#2F3032', // Dark mode background color
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // Dark text color for light mode
  },
  titleDark: {
    color: '#FFFFFF', // Light text color for dark mode
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  settingItemDark: {
    borderBottomColor: '#444444',
  },
  settingText: {
    fontSize: 16,
    color: '#333333', // Dark text color for light mode
  },
  settingTextDark: {
    color: '#FFFFFF', // Light text color for dark mode
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 24,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
