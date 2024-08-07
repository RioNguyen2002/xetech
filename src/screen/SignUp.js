import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import vector icons

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
        if (!agreeTerms) {
            console.log('You must agree to the terms');
            return;
        }

        // Handle sign-up logic here
        console.log('Sign Up', { name, email, password });

        // Navigate to the next screen or show a success message
        navigation.navigate('SignIn'); // Navigate to sign-in screen or dashboard
    };

    const handleSocialSignUp = (provider) => {
        console.log(`Sign up with ${provider}`);
        // Implement social sign-up logic here
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
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        value={name}
                        onChangeText={setName}
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        autoCapitalize='none'
                    />

                    {/* Terms and Conditions */}
                    <View style={styles.termsContainer}>
                        <CheckBox
                            value={agreeTerms}
                            onValueChange={setAgreeTerms}
                            tintColors={{ true: '#007BFF', false: '#000000' }} // Customize colors as needed
                        />
                        <Text style={styles.termsText}>
                            I agree to the
                            <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
                                <Text style={styles.termsLink}> Terms and Conditions</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* Sign In Link */}
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.signIn}>
                        <Text style={styles.signInText}>Already have an account? Sign In</Text>
                    </TouchableOpacity>
                </View>
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
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
    },
    termsText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
    termsLink: {
        color: '#007BFF',
        fontWeight: 'bold',
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
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
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
});
