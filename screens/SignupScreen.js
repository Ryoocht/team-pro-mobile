import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SignupScreen = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    
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
                    // value={email}
                    // onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    ref={passwordRef}
                    // value={ }
                    // onChangeText={text => }
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})
