/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import { initializeApp } from "firebase/app";

export default function App() {
  const Stack = createNativeStackNavigator();

  /** @format */

  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDgFft2u0oNS8PGdWWe7XR_U8DvXLThwOA",
    authDomain: "testauth-91cdb.firebaseapp.com",
    projectId: "testauth-91cdb",
    storageBucket: "testauth-91cdb.appspot.com",
    messagingSenderId: "907092628734",
    appId: "1:907092628734:web:aa84cf586585a00b5441af",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
