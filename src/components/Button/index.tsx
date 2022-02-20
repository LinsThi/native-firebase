import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  loading: boolean;
}

export function Button({ name, loading, ...rest }: ButtonProps) {
  return (
    <Sty.Button {...rest}>
      {loading ? (
        <Sty.Loading size="large" color="#fff" />
      ) : (
        <Sty.Name>{name}</Sty.Name>
      )}
    </Sty.Button>
  );
}
