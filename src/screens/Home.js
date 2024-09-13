import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
    const auth = getAuth();
    const user = auth.currentUser;

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                
                navigation.navigate('Sesion');
            })
            .catch((error) => {
                
                console.error(error);
                Alert.alert('Error', 'No se pudo cerrar sesión. Inténtalo de nuevo.');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hola, {user?.displayName || 'Usuario'}!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdateUser')}>
                <Text style={styles.buttonText}>Editar Información</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAD8C0',
        padding: 16,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#322C2B',
    },
    button: {
        backgroundColor: '#322C2B',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
