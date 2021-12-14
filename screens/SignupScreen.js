import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, firestore, setDoc, doc } from "../firebase";

const SignupScreen = () => {
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirm, setPasswordConfirm ] = useState("");
    const [ error, setError ] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                navigation.navigation("Home");
            }
        })
        return unsubscribe;
    },[]);

    const handleSignUp = async e => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return setError("Passwords do not match");
        }
        try {
            setError("");
            await signup(userName, email, password);
        } catch {
            return setError("Failed to create an account");
        }
    }

    const signup = async (username, email, password) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    const uid = user.uid;
                    const userInitialData = {
                        email: email,
                        uid: uid,
                        username: username
                    }
                    try {
                        setDoc(doc(firestore, "users", uid), userInitialData);
                    } catch(e) {
                        console.error("Error adding document: ", e);
                    }
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text>TeamPro</Text>
            <Text>{error}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={userName}
                    onChangeText={text => setUserName(text)}
                    style={styles.input}
                />
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
                <TextInput
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

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
