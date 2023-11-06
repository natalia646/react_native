import { View, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View>
      <StatusBar styled="auto" />
      <HomeScreen />
    </View>
  );
}
