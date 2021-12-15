import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth, signOut, firestore } from '../firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const currentUser = auth.currentUser.uid;
    const [ messages, setMessages ] = useState([]);
    const [ error, setError ] = useState("There is no message.");

    const getMessages = () => {
        try {
            const messageObj = onSnapshot(query(collection(firestore, "messages"), where("receiver", "array-contains-any", [currentUser])), (snapshot)=> {
                snapshot.docs.map(doc => {
                    if (doc) {
                        setError("");
                        setMessages(prevState => [
                            ...prevState,
                            {
                                title: doc.data().title, 
                                message: doc.data().message,
                                createdAt: doc.data().createdAt.toDate().toISOString()
                            }
                        ]);
                    } else {
                        setMessages([]);
                        setError("There is no message.");
                    }
                });
            });
            return messageObj;
        } catch(e) {
            return setError("Could not get any messages.");
        }
    }

    useEffect(() => {
        getMessages();
    },[]);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => navigation.replace('Title'))
        .catch(error => alert(error.message));
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.messageContainer}>
                <Text style={styles.messageTitle}>Messages</Text>
                <View style={styles.hrLine} />
                {error? <Text style={styles.errorMsg}>{error}</Text>: <></>}
                {messages.map(msg => (
                    <View style={styles.messageText}>
                        <View style={styles.dateTime}>
                            <Text>{msg.createdAt.slice(0,10)}</Text>
                            <Text>{msg.createdAt.slice(11,16)}</Text>
                        </View>
                        <Text style={styles.textMargin}>{msg.title}</Text>
                        <Text style={styles.textMargin}>{msg.message}</Text>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageContainer:{
        backgroundColor: 'white',
        borderRadius: 10,
        minWidth: "50%",
        maxHeight: "80%",
        overflow: "hidden",
    },
    messageTitle: {
        borderBottomColor: '#004445',
        fontSize: 20,
        marginLeft: 20,
        marginVertical: 10
    },
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    errorMsg: {
        fontSize: 16,
        marginLeft: 10,
    },
    dateTime:{
        flexDirection: 'row', 
        marginLeft: 10,
        marginTop: 5
    },
    messageText: {
        backgroundColor: "#e3e3e3",
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 15
    },
    textMargin: {
        margin: 10,
        fontSize: 17
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})
