import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Fragment } from "react";
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView } from "react-native";
//import {space}  from "./pix/space.jpg"

function useQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    updateQuote();
  }, []);

  function updateQuote() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      });
  }

  return { quote, updateQuote };
}

const RandomQuotes = ({ navigation }) => {
  const { quote, updateQuote } = useQuote();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'black' }}>
      <View style={{flex:1}}>
        <ImageBackground
          source={require("../images/space.jpg")}
          style={styles.backgroundPic}
        >
          <View style={styles.container}>
            {quote && (
              <Fragment>
                <Text style={styles.quoteText}>{quote.text}</Text>
                <Text style={styles.quoteAuthor}>{quote.author}</Text>
                <Button onPress={updateQuote} title="Show Me Another Quote!" />
              </Fragment>
            )}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#00E0CF", //"#00FF87", #00F80B #00E0CF
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  quoteText: {
    textAlign: "center",
    fontSize: 28,
    color: "#00F80B",
    fontWeight: "bold",
  },
  quoteAuthor: {
    fontSize: 18,
    marginTop: 25,
    marginBottom: 25,
    color: 'green',
  },

  backgroundPic: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default RandomQuotes;