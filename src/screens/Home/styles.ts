import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f8f8ff;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  align-items: flex-end;

  padding: 15px 5px;
`;

export const ContainerInputs = styled.View`
  align-items: center;
`;

export const ContainerInfo = styled.View``;

export const Button = styled.TouchableOpacity``;

export const ButtonInput = styled.TouchableOpacity`
  background: #9370db;
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  margin-top: 20px;
`;

export const TextSession = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const FlatlistProducts = styled.FlatList``;

export const ContainerItem = styled.View`
  background: rgba(250, 25, 25, 0.5);
  border-radius: 10px;
  margin: 10px 20px;
  padding: 10px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerItemInfo = styled.View``;

export const ContainerItemDate = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  font-size: 16px;
`;

export const TextDateAdded = styled.Text`
  font-size: 19px;
`;
