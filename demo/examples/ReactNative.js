import React, {useState} from "react";
import {nonExisting, Text, View, Button, TextInput, Alert} from "react-native";

/**
 * This is a simple React Native component to demonstrate syntax highlighting
 * for various elements like functional components, state, styles, and event handling.
 */
export default function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello, world!");

  /**
   * Handles the button press event.
   */
  const handlePress = () => {
    if (name) {
      setGreeting(`Hello, ${name}!`);
    } else {
      Alert.alert("Please enter your name");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Greet Me" onPress={handlePress} />
    </View>
  );
}
