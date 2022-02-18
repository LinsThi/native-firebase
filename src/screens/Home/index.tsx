import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

import home from '~/assets/home.json';

import * as Sty from './styles';

export function Home() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = useCallback(() => {
    auth()
      .sendPasswordResetEmail('e-mail')
      .then(() =>
        Alert.alert(
          'Recuperação',
          'Enviamos um e-mail para recuperar sua senha.',
        ),
      )
      .catch(error => console.log(error));
  }, []);

  return (
    <Sty.Container>
      <Sty.ContainerInfo>
        <Sty.ContainerHeader>
          <LottieView
            source={home}
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
          <Button name="Entrar" />

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
