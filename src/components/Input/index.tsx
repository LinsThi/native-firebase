import React from 'react';
import type { TextInputProps } from 'react-native';

import * as Sty from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <Sty.Container>
      <Sty.InputField {...rest} />
    </Sty.Container>
  );
}
