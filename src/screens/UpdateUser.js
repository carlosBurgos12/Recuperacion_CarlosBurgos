import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { auth } from '../utils/firebase-config'; // Ajusta la ruta si es necesario
import { updateProfile, updateEmail, updatePassword } from 'firebase/auth';

export default function EditUser() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setDisplayName(user.displayName || '');
            setEmail(user.email || '');
        }
    }, []);

    const handleUpdate = async () => {
        const user = auth.currentUser;
        try {
            if (user) {
                // Actualizar el nombre para mostrar
                if (displayName && displayName !== user.displayName) {
                    await updateProfile(user, { displayName });
                }

                // Actualizar el correo electrónico
                if (email && email !== user.email) {
                    await updateEmail(user, email);
                }

                // Actualizar la contraseña
                if (newPassword) {
                    await updatePassword(user, newPassword);
                }

                Alert.alert("Perfil actualizado con éxito");
            } else {
                Alert.alert("No hay usuario registrado");
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Editar Información del Usuario</Text>
            <TextInput
                placeholder="Nombre para mostrar"
                value={displayName}
                onChangeText={setDisplayName}
                style={styles.input}
            />
            <TextInput
                placeholder="Nuevo Email (opcional)"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Nueva Contraseña (opcional)"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity onPress={handleUpdate} style={styles.button}>
                <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#EAD8C0', // Fondo similar al de iniciar sesión
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#322C2B', // Color del texto similar al de iniciar sesión
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        backgroundColor: '#FFF', // Fondo blanco para los campos de entrada
    },
    button: {
        backgroundColor: '#322C2B', // Color de fondo del botón similar al de iniciar sesión
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
