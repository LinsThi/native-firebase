import { MaterialIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';

import register from '~/assets/register.json';

import * as Sty from './styles';

export function Register() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNewAccount = useCallback(() => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Conta', 'Cadastrada com sucesso'))
      .catch(error => console.log(error));
  }, [email, password]);

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <LottieView
          source={register}
          autoPlay
          loop
          style={{ width: 230, height: 230 }}
        />
      </Sty.ContainerHeader>

      <Sty.ContainerForm>
        <Sty.TextSession>Cadastrar</Sty.TextSession>

        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
      </Sty.ContainerForm>

      <Sty.ContainerButton>
        <Button name="Cadastrar" onPress={() => handleNewAccount()} />

        <Sty.ContainerHelpButtons>
          <Sty.HelpButton onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="arrow-back-ios" size={20} color="#9370DB" />
            <Sty.TextButton>Já tenho uma conta</Sty.TextButton>
          </Sty.HelpButton>
        </Sty.ContainerHelpButtons>
      </Sty.ContainerButton>
    </Sty.Container>
  );
}
