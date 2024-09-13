import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Las contraseñas no coinciden");
            return;
        }
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Actualizar el perfil del usuario con el nombre
            await updateProfile(user, { displayName: name });
            Alert.alert("Usuario registrado exitosamente");
            navigation.navigate('Sesion'); // Ajusta el nombre de tu pantalla de inicio de sesión
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Registro de Usuario</Text>
                <TextInput
                    placeholder="Nombre de usuario"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sesion')}>
                    <Text style={styles.link}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAD8C0',
        padding: 16,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#322C2B',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#FFF',
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
