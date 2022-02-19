import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

import login from '~/assets/login.json';

import * as Sty from './styles';

export function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(() => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Logado com sucesso');
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [email, password]);

  const handleForgotPassword = useCallback(() => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          'Recuperação',
          'Enviamos um e-mail para recuperar sua senha.',
        ),
      )
      .catch(error => console.log(error));
  }, []);

  const handleSignIntWithGoogle = useCallback(() => {
    async function googleSignIn() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const token = await auth().signInWithCredential(googleCredential);
      console.log(token);
    }

    googleSignIn();
  }, []);

  return (
    <Sty.Container>
      <Sty.ContainerInfo>
        <Sty.ContainerHeader>
          <LottieView
            source={login}
            autoPlay
            loop
            style={{ width: 230, height: 230 }}
          />
        </Sty.ContainerHeader>

        <Sty.ContainerForm>
          <Sty.TextSession>Entrar</Sty.TextSession>

          <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />
        </Sty.ContainerForm>

        <Sty.ContainerButton>
          <Button
            name="Entrar"
            onPress={() => handleSignIn()}
            loading={loading}
          />

          <Sty.TextButtonGoogle>Ou</Sty.TextButtonGoogle>

          <Sty.ButtonGoogle onPress={() => handleSignIntWithGoogle()}>
            <Ionicons name="logo-google" size={30} color="#fff" />
            <Sty.TextButtonGoogle>Entrar com google</Sty.TextButtonGoogle>
          </Sty.ButtonGoogle>

          <Sty.ContainerHelpButtons>
            <Sty.HelpButton onPress={() => navigation.navigate('Register')}>
              <Feather name="user-plus" size={20} />
              <Sty.TextButton>Criar conta</Sty.TextButton>
            </Sty.HelpButton>

            <Sty.HelpButton onPress={() => handleForgotPassword()}>
              <MaterialCommunityIcons name="email-outline" size={20} />
              <Sty.TextButton>Recuperar senha</Sty.TextButton>
            </Sty.HelpButton>
          </Sty.ContainerHelpButtons>
        </Sty.ContainerButton>
      </Sty.ContainerInfo>
    </Sty.Container>
  );
}
