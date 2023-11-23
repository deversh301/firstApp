import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          flexDirection: "row",
          paddingTop: 20,
          paddingBottom: 10,
          justifyContent: "center",
          alignItems: "centre",
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: "70%",
            margin: 10,

            borderWidth: 1,
            padding: 10,
          }}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button title="Press me" />
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
