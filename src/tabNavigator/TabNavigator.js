import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

// Importa tu componente de pantalla aquí
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Oculta el header
                tabBarActiveTintColor: '#AF8260', // Color de los íconos activos
                tabBarInactiveTintColor: '#B99873', // Color de los íconos inactivos
                tabBarStyle: {
                    backgroundColor: '#FFF', 
                    height: Platform.OS === 'ios' ? 80 : 60, // Estilo de la barra de pestañas, altura diferente para iOS y Android
                    borderTopWidth: 0
                }, // Estilo de la barra de pestañas
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    }
                    return <Ionicons name={iconName} color={color} size={size} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ title: 'Inicio' }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
