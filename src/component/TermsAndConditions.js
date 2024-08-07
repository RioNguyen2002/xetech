// TermsAndConditions.js

import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const TermsAndConditions = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Terms and Conditions</Text>
                <Text style={styles.text}>
                    {/* Add your terms and conditions text here */}
                    These Terms and Conditions govern your use of this application. By using this app, you agree to abide by these terms. If you do not agree to these terms, please do not use this app.
                    {/* ... More text ... */}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    text: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});

export default TermsAndConditions;
