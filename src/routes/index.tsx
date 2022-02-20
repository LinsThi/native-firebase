import { CLIENT_ID } from '@env';
import type { FirebaseAuthTypes } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';
import { Register } from '~/screens/Register';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

export function RootStack() {
  const [isLogged, setIsLogged] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const user = auth().onAuthStateChanged(setIsLogged);

    GoogleSignin.configure({
      webClientId: CLIENT_ID,
    });

    return user;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <NavigationContainer>
          {isLogged ? (
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          ) : (
            <StackLogin.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerShown: false,
              }}
            >
              <StackLogin.Screen name="Login" component={Login} />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
