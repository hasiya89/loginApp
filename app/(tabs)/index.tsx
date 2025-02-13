import { View } from "react-native";
import React, { useState } from "react";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

export default function Index() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const toggleView = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {isLoginVisible ? (
        <LoginView onSignupPress={toggleView} />
      ) : (
        <SignupView onLoginPress={toggleView} />
      )}
    </View>
  );
}