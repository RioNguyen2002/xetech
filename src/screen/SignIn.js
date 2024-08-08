import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { useFocusEffect } from '@react-navigation/native';
import { authenticateUser } from '../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome';



const icons = [
    { id: '1', name: 'facebook', iconType: 'FontAwesome' },
    { id: '2', name: 'google', iconType: 'FontAwesome' },
];

const SignIn = ({ navigation }) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [identifierError, setIdentifierError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    useEffect(() => {
        setIdentifierError('');
        setPasswordError('');
        setGeneralError('');
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            setIdentifier('');
            setPassword('');
            setRememberMe(false);
            setIdentifierError('');
            setPasswordError('');
            setGeneralError('');
        }, [])
    );

    const handleSignIn = async () => {
        let valid = true;

        if (!identifier) {
            setIdentifierError('Please enter email or phone');
            valid = false;
        } else {
            setIdentifierError('');
        }

        if (!password) {
            setPasswordError('Please enter password');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!valid) return;

        try {
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
        navigation.navigate('SignUp');
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
                    <Image
                        source={require('../assets/logoapp.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Sign In</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email or Phone'
                        value={identifier}
                        onChangeText={setIdentifier}
                        keyboardType='default'
                        autoCapitalize='none'
                    />
                    {identifierError ? (
                        <Text style={styles.errorText}>{identifierError}</Text>
                    ) : null}
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize='none'
                    />
                    {passwordError ? (
                        <Text style={styles.errorText}>{passwordError}</Text>
                    ) : null}
                    <View style={styles.rememberMeContainer}>
                        <CheckBox
                            value={rememberMe}
                            onValueChange={setRememberMe}
                            tintColors={{ true: '#007BFF', false: '#000000' }}
                        />
                        <Text style={styles.rememberMeText}>Remember Me</Text>
                    </View>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    {generalError ? (
                        <Text style={styles.generalErrorText}>{generalError}</Text>
                    ) : null}
                    <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRegister} style={styles.register}>
                        <Text style={styles.registerText}>Don't have an account? Register</Text>
                    </TouchableOpacity>
                    <View style={styles.iconListContainer}>
                        <FlatList
                            data={icons}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal
                            contentContainerStyle={styles.iconListContent}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    safeAreaView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        padding: 20,
        marginHorizontal: 15,
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    errorText: {
        color: '#FF0000',
        fontSize: 12,
        marginBottom: 15,
        textAlign: 'center',
    },
    generalErrorText: {
        color: '#FF0000',
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    rememberMeText: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 10,
    },
    signInButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    signInButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        alignItems: 'center',
        marginBottom: 15,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#007BFF',
    },
    register: {
        alignItems: 'center',
    },
    registerText: {
        fontSize: 14,
        color: '#333333',
    },
    iconListContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    iconListContent: {
        paddingHorizontal: 20,
    },
    iconContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop:10,
    },
    iconText: {
        fontSize: 12,
        color: '#333333',
        marginTop: 5,
    },
});

export default SignIn;
