import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                navigation.navigate('Home');
            }
        })
        return unsubscribe;
    },[]);
    
    const handleLogin = async e => {
        e.preventDefault();
        try {
            setError("");
            await login(email, password);
            navigation.navigate("Home");
        } catch {
            return setError("Failed to sign in");
        }
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={styles.titleText}>TeamPro</Text>
            <Text style={styles.errorText}>{error}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
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
        backgroundColor: "#004445",
    },
    titleText: {
        fontSize: 60,
        margin: 10,
        color: "#fff1c1",
    },
    errorText: {
        fontSize: 23,
        color: "red",
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
        backgroundColor: '#fff1c1',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff1c1',
        marginTop: 5,
        borderColor: "#fff1c1",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#004445',
        fontWeight: '700',
        fontSize: 19,
    }
})
