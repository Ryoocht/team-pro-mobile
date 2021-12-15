import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TitleScreen = ({ navigation }) => {

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text style={styles.titleText}>TeamPro</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push("Signup")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push("Login")}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default TitleScreen

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
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#fff1c1',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#004445',
        marginTop: 3,
        borderColor: "#fff1c1",
        borderWidth: 2,
    },
    buttonText: {
        color: '#004445',
        fontWeight: '700',
        fontSize: 19,
    },
    buttonOutlineText: {
        color: '#fff1c1',
        fontWeight: '700',
        fontSize: 19,
    }
})
