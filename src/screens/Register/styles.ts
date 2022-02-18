import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f8f8ff;
`;

export const ContainerHeader = styled.View`
  align-items: center;
  justify-content: center;

  padding-top: 50px;
  padding-bottom: 30px;
`;

export const ContainerForm = styled.View`
  align-items: center;
  padding: 15px 0px;
  width: 100%;
`;

export const ContainerButton = styled.View`
  padding: 15px 0px;
  align-items: center;
  width: 100%;
`;

export const ContainerHelpButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 25px;
`;

export const HelpButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextSession = styled.Text`
  font-size: 30px;
  text-align: left;
  width: 100%;
  padding-left: 10px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #9370db;
`;
