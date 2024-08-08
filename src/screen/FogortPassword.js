import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
    const [identifier, setIdentifier] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleResetPassword = async () => {
        // Reset errors
        setIdentifierError('');
        setSuccessMessage('');

        // Validate input
        if (!identifier) {
            setIdentifierError('Please enter your email or phone number');
            return;
        }

        try {
            // Replace with your password reset logic
            await sendPasswordResetRequest(identifier);
            setSuccessMessage('Password reset link sent. Please check your email.');
        } catch (error) {
            setIdentifierError('Error sending password reset link');
        }
    };

    const sendPasswordResetRequest = async (identifier) => {
        // Implement your password reset logic here
        // For example, use Firebase Auth API or other authentication service
        console.log(`Sending password reset request for: ${identifier}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Forgot Password</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Enter your email or phone number'
                    value={identifier}
                    onChangeText={setIdentifier}
                    keyboardType='default'
                    placeholderTextColor="#888888"
                />
                {identifierError ? <Text style={styles.errorText}>{identifierError}</Text> : null}
                {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

                <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                    <Text style={styles.buttonText}>Send Reset Link</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back to Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    innerContainer: {
        width: '100%',
        maxWidth: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    backButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#007BFF',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    successText: {
        color: 'green',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default ForgotPasswordScreen;
