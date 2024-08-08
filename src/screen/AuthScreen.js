import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, FlatList, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import TermsAndConditions from '../component/TermsAndConditions';

const icons = [
    { id: '1', name: 'facebook', iconType: 'FontAwesome' },
    { id: '2', name: 'google', iconType: 'FontAwesome' },
];

const AuthScreen = ({ navigation }) => {
    const [isSignUp, setIsSignUp] = useState(false);
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
    const [identifier, setIdentifier] = useState('');
    const [identifierError, setIdentifierError] = useState('');
    const [passwordErrorSignIn, setPasswordErrorSignIn] = useState('');
    const [generalError, setGeneralError] = useState('');

    const [fadeAnim] = useState(new Animated.Value(0));
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => setShowForm(true), 3000);
        });
    }, [fadeAnim]);

    const resetErrors = () => {
        setNameError('');
        setUsernameError('');
        setEmailError('');
        setPhoneError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setTermsError('');
        setIdentifierError('');
        setPasswordErrorSignIn('');
        setGeneralError('');
    };

    const handleSignUp = async () => {
        resetErrors(); // Reset errors at the beginning of sign-up process
        let valid = true;

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

    const handleSignIn = async () => {
        resetErrors(); // Reset errors at the beginning of sign-in process
        let valid = true;

        if (!identifier) {
            setIdentifierError('Please enter email or phone');
            valid = false;
        } else {
            setIdentifierError('');
        }

        if (!password) {
            setPasswordErrorSignIn('Please enter password');
            valid = false;
        } else {
            setPasswordErrorSignIn('');
        }

        if (!valid) return;

        try {
            // Replace this with your authentication logic
            const userRole = await authenticateUser(identifier, password);

            if (userRole === 'admin') {
                navigation.navigate('AdminTab');
            } else if (userRole === 'user') {
                navigation.navigate('UserTab');
            } else if (userRole === 'driver') {
                navigation.navigate('DriverTab');
            } else {
                setGeneralError('Role not found or invalid credentials');
            }
        } catch (error) {
            setGeneralError('Invalid credentials or error occurred');
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    const handleRegister = () => {
        setIsSignUp(true);
        resetErrors(); // Reset errors when switching to sign-up
    };

    const handleSwitchToSignIn = () => {
        setIsSignUp(false);
        resetErrors(); // Reset errors when switching to sign-in
    };

    const renderItem = ({ item }) => (
        <View style={styles.iconContainer}>
            <Icon
                name={item.name}
                size={30}
                color="#007BFF"
                type={item.iconType}
            />
            <Text style={styles.iconText}>{item.name}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                    <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
                        <Image
                            source={require('../assets/logoapp.png')}
                            style={styles.logo}
                        />
                    </Animated.View>

                    {showForm && (
                        <>
                            <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>

                            {isSignUp ? (
                                <>
                                    {/* Sign Up Form Inputs */}
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Full Name'
                                        value={name}
                                        onChangeText={setName}
                                        placeholderTextColor="#888888"
                                    />
                                    {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

                                    <TextInput
                                        style={styles.input}
                                        placeholder='Username'
                                        value={username}
                                        onChangeText={setUsername}
                                        placeholderTextColor="#888888"
                                    />
                                    {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

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

                                    <TextInput
                                        style={styles.input}
                                        placeholder='Phone Number'
                                        value={phone}
                                        onChangeText={setPhone}
                                        keyboardType='phone-pad'
                                        placeholderTextColor="#888888"
                                    />
                                    {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

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

                                    <View style={styles.termsContainer}>
                                        <CheckBox
                                            value={agreeTerms}
                                            onValueChange={setAgreeTerms}
                                            tintColors={{ true: '#007BFF', false: '#888888' }}
                                        />
                                        <Text style={styles.termsText}>
                                            I agree to the
                                            <TouchableOpacity onPress={() => setTermsVisible(true)}>
                                                <Text style={styles.termsLink}> Terms and Conditions</Text>
                                            </TouchableOpacity>
                                        </Text>
                                    </View>
                                    {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}

                                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                                        <Text style={styles.buttonText}>Sign Up</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleSwitchToSignIn} style={styles.switchButton}>
                                        <Text style={styles.switchButtonText}>Already have an account? Sign In</Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <>
                                    {/* Sign In Form Inputs */}
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Email or Phone'
                                        value={identifier}
                                        onChangeText={setIdentifier}
                                        placeholderTextColor="#888888"
                                    />
                                    {identifierError ? <Text style={styles.errorText}>{identifierError}</Text> : null}

                                    <TextInput
                                        style={styles.input}
                                        placeholder='Password'
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry
                                        autoCapitalize='none'
                                        placeholderTextColor="#888888"
                                    />
                                    {passwordErrorSignIn ? <Text style={styles.errorText}>{passwordErrorSignIn}</Text> : null}

                                    {generalError ? <Text style={styles.errorText}>{generalError}</Text> : null}

                                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                                        <Text style={styles.buttonText}>Sign In</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
                                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleRegister} style={styles.switchButton}>
                                        <Text style={styles.switchButtonText}>Don't have an account? Sign Up</Text>
                                    </TouchableOpacity>
                                </>
                            )}

                            <FlatList
                                data={icons}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                horizontal
                                contentContainerStyle={styles.iconList}
                            />
                        </>
                    )}
                </View>

                <TermsAndConditions visible={termsVisible} onClose={() => setTermsVisible(false)} />
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    safeAreaView: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    logoContainer: {
        flex: 1, // Take full height of the container
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
    logo: {
        width: 200, // Increased size
        height: 200, // Increased size
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    switchButton: {
        marginTop: 10,
    },
    switchButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
    forgotPasswordButton: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#007BFF',
        fontSize: 16,
    },
    iconList: {
        marginTop: 20,
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    iconText: {
        marginTop: 5,
        color: '#007BFF',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    termsText: {
        marginLeft: 8,
        fontSize: 16,
    },
    termsLink: {
        color: '#007BFF',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
    },
});


export default AuthScreen;
