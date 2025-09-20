import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>User SCREEN</Text>
      <Link href={"/"}>Go to Home</Link>
    </View>
  );
}
