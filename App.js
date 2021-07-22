import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppButton from './app/components/AppButton';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppCard from './app/components/AppCard.android';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <ListingDetailsScreen image={require("./app/assets/bike1.jpg")} title="Expensive S-works" subtitle="$200" />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f4f4"
  }
})

