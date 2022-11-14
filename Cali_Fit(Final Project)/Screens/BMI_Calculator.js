import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

const BMI_Calculator = () => {

  const [inches, setInches] = useState('');
  const [pounds, setPounds] = useState('');

  const [userFeet, setUserFeet] = useState('');
  const [displayResult, setDisplayResult] = useState('');

  var result;
  // var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
  // result = result.toFixed(2);

  function Calculation(a, b, c) {
    var footInches = Number(a * 12);
    var inchConv = Number(b);
    var poundConv = Number(c);

    var poundKilo = (poundConv * 0.4536);
    var footMeter = ((footInches + inchConv) * .0254);

    var BMI = (poundKilo / (footMeter * footMeter));

    result = BMI.toFixed(2);



    return result;

  }

  function displayBMI(BMI) {
    if (BMI == '') {
      return "";
    }
    else if (BMI < 18.5) {
      return "you are underweight.";
    }
    else if (BMI >= 18.5 && BMI < 25.0) {
      return "You are of normal weight.";
    }
    else if (BMI > 25.0 && BMI < 30.0) {
      return "You are overweight.";
    }
    else if (BMI > 30.0 && BMI < 300) {
      return "you are obese.";
    }
    else if (BMI > 300) {
      return "DAYUM";
    }
    return "?";
  }


  return (

    <SafeAreaView style={styles.safeAreaView}>

      <View style={styles.box1}>


        <View>

          <Text style={styles.titleName}>BMI Calculator</Text>

          {/* sets user height */}
          {/* <Text>Please enter your height</Text> */}
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textFormat}>feet</Text>
            <TextInput value={userFeet} onChangeText={(text) => setUserFeet(text)} style={styles.input} />


            <Text style={styles.textFormat}>inches</Text>
            <TextInput value={inches} onChangeText={(text) => setInches(text)} style={styles.input} />
          </View>

          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.textFormat}>pounds</Text>
            <TextInput value={pounds} onChangeText={(text) => setPounds(text)} style={styles.input} />
          </View>

          <Button color="black" title="Calculate" style={styles.button} onPress={() => {
            setUserFeet(Number(userFeet));
            setInches(Number(inches));
            setPounds(Number(pounds));

            setDisplayResult(Calculation(userFeet, inches, pounds));

          }} />
          <Text style={styles.displayFormat}>{displayResult}</Text>
          <Text style={styles.displayFormat}>{displayBMI(displayResult)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textFormat: {
    margin: 15,
    height: 40,
    padding: 10,
  },
  displayFormat: {
    margin: 2,
    height: 40,
    padding: 4,
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black'
  },
  titleName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  box1: {
    flex: 2,
    backgroundColor: '#e6e6fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default BMI_Calculator;