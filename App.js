import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sesion from './src/screens/Sesion';
import SignUp from './src/screens/SignUp';
import UpdateUser from './src/screens/UpdateUser';
import TabNavigator from './src/tabNavigator/TabNavigator';
import Home from './src/screens/Home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Sesion'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Sesion" component={Sesion} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
