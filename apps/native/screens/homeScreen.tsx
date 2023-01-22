
import React, { useContext, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Logo, Button, Context as NnContext, NnProviderValues } from "ui";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_500Medium } from '@expo-google-fonts/jura';

const bgImagePath = require('../assets/background.png');

const HomeScreen = () => {
  const {
    state,
    fetchNetworkStatus = () => {},
  }: NnProviderValues = useContext(NnContext);

  const { network } = state;
  const { location } = network;

  useEffect(() => {
    fetchNetworkStatus();
  }, []);
  
  let [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    Jura: Jura_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

    return(
        <View style={styles.container}>
        <ImageBackground source={bgImagePath} resizeMode="cover" style={styles.background}>
          <Logo />
          <Text style={styles.header}><Text style={{fontFamily: 'Jura'}}>NeoNav Status</Text></Text>
          <Text style={styles.systemStatus}><Text style={{fontFamily: 'Jura'}}>{location}</Text></Text>
          <Button
            data-augmented-ui="tr-clip-x tl-clip-x br-clip-x bl-clip-x both"
            onClick={() => {
              console.log("Pressed!");
              alert("Thank you!");
            }}
            text="Confirm"
          />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#120458",
      fontFamily: "Roboto",
    },
    background: {
      width: '100%',
      height: '100%',
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontFamily: "Jura",
      color: "#42c6ff",
      fontWeight: "bold",
      marginBottom: 20,
      fontSize: 36,
      textShadowColor: 'rgba(255, 255, 255, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 15,
    },
    systemStatus: {
      fontFamily: "Jura",
      color: "white",
      fontWeight: "bold",
      marginBottom: 20,
      fontSize: 24,
      textShadowColor: 'rgba(255, 255, 255, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 15,
    }
  });
  
  export default HomeScreen;