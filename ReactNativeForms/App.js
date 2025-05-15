import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [isEnable, setIsEnabled] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const ValidateForm = () => {
    let error = {};
    if (!username) error.username = "Empty UserName";

    if (!password) error.password = "Empty password";
    if (!password.includes("@")) {
      error.password
        ? (error.password += " password must include special chars")
        : (error.password = " password must include special chars");
    }

    setError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = () => {
    if (ValidateForm()) {
      setError({});
      setUsername("");
      setPassword("");
    }
  };

  /*

  Keyboard can sometime cover the content/input fileds use KeyboardAvoidingView


  */

  console.log({ isEnable });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={"padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 25 : 0}
        >
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter yopur username"
            value={username}
            onChangeText={setUsername}
          />
          {error.username ? (
            <Text style={styles.errorText}>{error.username}</Text>
          ) : null}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {error.password ? (
            <Text style={styles.errorText}>{error.password}</Text>
          ) : null}

          <Button style={styles.Button} title="LogIn" onPress={handleSubmit} />
        </KeyboardAvoidingView>

        {/* <View>
        <Switch
          value={isEnable}
          onValueChange={() => setIsEnabled(!isEnable)}
          trackColor={{ false: "yellow", true: "red" }}
        />
        <Text>Forms</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          returnKeyType={"send"}
          keyboardType={"numeric"}
          autoCorrect={true}
        />
        <Text>my name is {name}</Text>
      </View> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    // height: 30,
    margin: 20,
    padding: 8,
    borderWidth: 1,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  form: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red", // Make sure the error text is visible
    marginTop: 5, // Add some space above the error message
  },
});
