import styled from "styled-components/native";
import { View, Text, StatusBar } from "react-native";
import { Post } from "./components/Post";
import { useState } from "react";

const ContainerView = styled.View`
  background-color: red;
  width: auto;
  height: 70px;
`;

export default function App() {
  const [count, setCount] = useState(5)


  return (
    <View>
      <StatusBar styled="auto" />
      <ContainerView>
        <Text>Hello</Text>
        <Post num={count} />
      </ContainerView>
    </View>
  );
}
