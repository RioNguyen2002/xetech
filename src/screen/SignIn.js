import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { authenticateUser } from '../services/auth'; // Import the authentication logic

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignIn = async () => {
        const userRole = await authenticateUser(email, password);

        // Handle navigation based on user role
        if (userRole === 'admin') {
            navigation.navigate('AdminTab'); // Admin dashboard
        } else if (userRole === 'user') {
            navigation.navigate('UserTab'); // User dashboard
        } else {
            console.log('Role not found or invalid credentials');
        }
    };

    const handleForgotPassword = () => {
       navigation.navigate('ForgotPassword');
    };

    const handleRegister = () => {
        // Navigate to the register screen
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/logo.png')} // Replace with the path to your logo image
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Sign In</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize='none'
                    />
                    <View style={styles.rememberMeContainer}>
                        <CheckBox
                            value={rememberMe}
                            onValueChange={setRememberMe}
                            tintColors={{ true: '#007BFF', false: '#000000' }} // Customize colors as needed
                        />
                        <Text style={styles.rememberMeText}>Remember Me</Text>
                    </View>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRegister} style={styles.register}>
                        <Text style={styles.registerText}>Don't have an account? Register</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 24,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        alignItems: 'center',
        marginHorizontal: 16,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        fontSize: 16,
        width: '100%',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
    },
    rememberMeText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    signInButton: {
        backgroundColor: '#007BFF',
        borderRadius: 12,
        paddingVertical: 14,
        marginBottom: 16,
        alignItems: 'center',
        width: '100%',
    },
    signInButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginVertical: 12,
        width: '100%',
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#007BFF',
        fontSize: 16,
    },
    register: {
        marginVertical: 12,
        width: '100%',
        alignItems: 'center',
    },
    registerText: {
        color: '#007BFF',
        fontSize: 16,
    },
});
