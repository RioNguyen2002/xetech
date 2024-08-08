import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import TermsAndConditions from '../component/TermsAndConditions'; // Import TermsAndConditions component

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [termsVisible, setTermsVisible] = useState(false);

    // Error states
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [termsError, setTermsError] = useState('');

    const handleSignUp = async () => {
        let valid = true;

        // Reset errors
        setNameError('');
        setUsernameError('');
        setEmailError('');
        setPhoneError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setTermsError('');

        if (!name) {
            setNameError('Full Name is required');
            valid = false;
        }
        if (!username) {
            setUsernameError('Username is required');
            valid = false;
        }
        if (!email) {
            setEmailError('Email is required');
            valid = false;
        }
        if (!phone) {
            setPhoneError('Phone Number is required');
            valid = false;
        }
        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        }
        if (!agreeTerms) {
            setTermsError('You must agree to the terms');
            valid = false;
        }

        if (!valid) return;

        // Handle sign-up logic here
        console.log('Sign Up', { name, username, email, phone, password });

        // Navigate to the next screen or show a success message
        navigation.navigate('SignIn'); // Navigate to sign-in screen or dashboard
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/logo.png')} // Replace with the path to your logo image
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Sign Up</Text>

                    {/* Form Inputs */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Full Name'
                            value={name}
                            onChangeText={setName}
                            placeholderTextColor="#888888"
                        />
                        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                            value={username}
                            onChangeText={setUsername}
                            placeholderTextColor="#888888"
                        />
                        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            placeholderTextColor="#888888"
                        />
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone Number'
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType='phone-pad'
                            placeholderTextColor="#888888"
                        />
                        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoCapitalize='none'
                            placeholderTextColor="#888888"
                        />
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            autoCapitalize='none'
                            placeholderTextColor="#888888"
                        />
                        {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
                    </View>

                    {/* Terms and Conditions */}
                    <View style={styles.termsContainer}>
                        <CheckBox
                            value={agreeTerms}
                            onValueChange={setAgreeTerms}
                            tintColors={{ true: '#007BFF', false: '#000000' }}
                        />
                        <Text style={styles.termsText}>
                            I agree to the
                            <TouchableOpacity onPress={() => setTermsVisible(true)}>
                                <Text style={styles.termsLink}> Terms and Conditions</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                    {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* Sign In Link */}
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signIn}>
                        <Text style={styles.signInText}>Already have an account? Sign In</Text>
                    </TouchableOpacity>
                </View>

                {/* Terms and Conditions Component */}
                <TermsAndConditions visible={termsVisible} onClose={() => setTermsVisible(false)} />
            </SafeAreaView>
        </ScrollView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    safeAreaView: {
        flex: 1,
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 24,
        elevation: 5,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        alignItems: 'center',
        marginHorizontal: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#333333',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    input: {
        height: 50,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FAFAFA',
        fontSize: 16,
        color: '#333333',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    termsText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333333',
    },
    termsLink: {
        color: '#007BFF',
        fontWeight: '500',
    },
    signUpButton: {
        backgroundColor: '#007BFF',
        borderRadius: 12,
        paddingVertical: 14,
        marginBottom: 16,
        alignItems: 'center',
        width: '100%',
    },
    signUpButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    signIn: {
        marginVertical: 12,
        width: '100%',
        alignItems: 'center',
    },
    signInText: {
        color: '#007BFF',
        fontSize: 16,
    },
    errorText: {
        color: '#FF0000',
        fontSize: 12,
        marginTop: 4,
        textAlign: 'left',
    },
});
