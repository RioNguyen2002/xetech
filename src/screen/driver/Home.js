import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '../../Theme/ThemeContext'; // Adjust the import based on your actual ThemeContext path

const Home = () => {
  const { isDarkMode } = useTheme(); // Use your context or state to get the dark mode status

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.innerContainer, isDarkMode && styles.innerContainerDark]}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>Driver</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Light mode background color
  },
  containerDark: {
    backgroundColor: '#2F3032', // Dark mode background color
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  innerContainerDark: {
    backgroundColor: '#1E1E1E', // Slightly different dark background for contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark text color for light mode
  },
  titleDark: {
    color: '#E0E0E0', // Light text color for dark mode
  },
});
