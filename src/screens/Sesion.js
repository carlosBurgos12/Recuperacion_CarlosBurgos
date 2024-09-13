import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Sesion({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Navegar a la pantalla de inicio después del inicio de sesión exitoso
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.link}>¿No tienes una cuenta? Regístrate aquí</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#EAD8C0',
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#322C2B',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: '#322C2B',
        textDecorationLine: 'underline',
    },
});
