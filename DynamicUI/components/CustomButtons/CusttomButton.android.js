import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <Text style={{ color: "black", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
