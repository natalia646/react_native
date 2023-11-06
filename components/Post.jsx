import { View, Text, Image } from "react-native";
import styled from "styled-components/native";



export const Post = ({ id, title, img }) => {

  return (
    <View>
      <NamePizza >{title}</NamePizza>
      <PizzaImg source={{ uri: img }} />
    </View>
  );
};


const PizzaImg = styled.Image`
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 50px;
`;

const NamePizza = styled.Text`
    text-align:center;
    font-size: 20px;
`
