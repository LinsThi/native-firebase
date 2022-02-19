import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #f8f8ff;
`;

export const ContainerInfo = styled.View`
  background: #dcdcdc;
  width: 85%;
  border-radius: 10px;
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
`;

export const ContainerButton = styled.View`
  padding: 15px 0px;
  align-items: center;
`;

export const ContainerHelpButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 50px;
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 10px;
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
  font-size: 17px;
  padding-left: 5px;
`;

export const ButtonGoogle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #4285f4;
  padding: 5px 5px;
  border-radius: 10px;
`;

export const TextButtonGoogle = styled.Text`
  font-size: 20px;
  padding-left: 10px;
  color: #fff;
`;
