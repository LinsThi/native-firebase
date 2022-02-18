import { Ionicons, Fontisto } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';

import { Input } from '~/components/Input';

import * as Sty from './styles';

type ProductProps = {
  id: string;
  name: string;
  value: string;
  created_at?: any;
};

type RenderProductProps = {
  item: ProductProps;
};

export function Home() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [products, setProducts] = useState<ProductProps[]>([]);

  function handleSignOut() {
    auth().signOut();
  }

  const handleNewProduct = useCallback(() => {
    firestore()
      .collection('products')
      .add({
        name,
        value,
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => Alert.alert('Produto', 'Cadastrado com sucesso'))
      .catch(error => console.log(error))
      .finally(() => {
        setName('');
        setValue('');
      });
  }, [name, value]);

  const renderProduct = useCallback(({ item }: RenderProductProps) => {
    const seconds = item.created_at.seconds * 1000;
    const dateAdded = `${new Date(seconds).getDate()}/${new Date(
      seconds,
    ).getMonth()}`;
    return (
      <Sty.ContainerItem>
        <Sty.ContainerInfo>
          <Sty.TextProduct>{item.name}</Sty.TextProduct>
          <Sty.TextValue>{item.value}</Sty.TextValue>
        </Sty.ContainerInfo>

        <Sty.ContainerItemDate>
          <Fontisto name="date" size={20} />
          <Sty.TextDateAdded>{dateAdded}</Sty.TextDateAdded>
        </Sty.ContainerItemDate>
      </Sty.ContainerItem>
    );
  }, []);

  useEffect(() => {
    const results = firestore()
      .collection('products')
      // .where('value', '>', '15')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        setProducts(data);
      });

    return () => results();
  }, []);

  return (
    <Sty.Container>
      <Sty.ContainerHeader>
        <Sty.Button onPress={() => handleSignOut()}>
          <Ionicons name="ios-exit-outline" size={40} color="#9370db" />
        </Sty.Button>
      </Sty.ContainerHeader>

      <Sty.ContainerInputs>
        <Sty.TextSession>Adicionar produtos</Sty.TextSession>
        <Input
          placeholder="Nome do produto"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Valor do produto"
          value={value}
          onChangeText={setValue}
        />

        <Sty.ButtonInput onPress={() => handleNewProduct()}>
          <Text>Adicionar produto</Text>
        </Sty.ButtonInput>
      </Sty.ContainerInputs>

      <Sty.ContainerInfo>
        <Sty.TextSession>Produtos adicionados</Sty.TextSession>

        <Sty.FlatlistProducts
          data={products}
          extraData={products}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderProduct}
        />
      </Sty.ContainerInfo>
    </Sty.Container>
  );
}
