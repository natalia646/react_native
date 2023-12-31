import styled from "styled-components/native";
import axios from "axios";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = () => {
    setIsLoading(true);
    axios
      .get("https://64ca66e8700d50e3c704da5c.mockapi.io/api/va/posts")
      .then(({ data }) => setItem(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchItems, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar styled="auto" />
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </View>
    );
  }
  return (
    <View>
      <StatusBar styled="auto" />
      <ContainerView>
        <Text>Hello</Text>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchItems} />
          }
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Post id={item.id} title={item.title} img={item.imageUrl} />
            </TouchableOpacity>
          )}
        />
      </ContainerView>
    </View>
  );
}

const ContainerView = styled.View`
  background-color: rgba(155, 45, 164, 0.1);
`;
