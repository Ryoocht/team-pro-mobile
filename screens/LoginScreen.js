import React, { useRef } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
// import { useAuth } from '../context/AuthContext';

const LoginScreen = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    // const { login } = useAuth();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text>TeamPro</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    ref={emailRef}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    ref={passwordRef}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    // onPress={() => {}}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0772F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#0772F9",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#0772F9',
        fontWeight: '700',
        fontSize: 16,
    }
})
