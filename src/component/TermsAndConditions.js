import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const TermsAndConditions = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Terms and Conditions</Text>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.termsText}>
                        {/* Your Terms and Conditions text goes here */}
                        1. Acceptance of Terms{'\n'}
                        By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.{'\n'}{'\n'}
                        2. Description of Services{'\n'}
                        Our services include [brief description of services provided]. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.{'\n'}{'\n'}
                        3. User Accounts{'\n'}
                        You may be required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.{'\n'}{'\n'}
                        4. User Conduct{'\n'}
                        You agree not to use our services for any unlawful purpose or in any way that violates these Terms and Conditions. You also agree not to:{'\n'}
                        - Harass, abuse, or harm other users{'\n'}
                        - Violate the rights of third parties{'\n'}
                        - Interfere with or disrupt the operation of our services{'\n'}
                        - Use our services for commercial solicitation without our prior written consent{'\n'}{'\n'}
                        5. Intellectual Property{'\n'}
                        All content and materials available on our services, including but not limited to text, graphics, logos, images, and software, are the property of [company name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.{'\n'}{'\n'}
                        6. Limitation of Liability{'\n'}
                        To the fullest extent permitted by law, [company name] shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.{'\n'}{'\n'}
                        7. Indemnification{'\n'}
                        You agree to indemnify and hold [company name], its affiliates, officers, directors, employees, and agents harmless from and against any and all claims, liabilities, damages, losses, or expenses arising out of or in any way connected with your use of our services.{'\n'}{'\n'}
                        8. Governing Law{'\n'}
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of [jurisdiction], without regard to its conflict of law provisions.{'\n'}{'\n'}
                        9. Changes to Terms and Conditions{'\n'}
                        We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.
                    </Text>
                </ScrollView>
                <TouchableOpacity onPress={onClose} style={styles.modalButton}>
                    <Text style={styles.modalButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
        justifyContent: 'space-between',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    termsText: {
        fontSize: 16,
        color: '#333333',
    },
    modalButton: {
        backgroundColor: '#007BFF',
        borderRadius: 12,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default TermsAndConditions;
