import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const ScreenOne = props => {
    const assets = [
        require("../images/woman-push-ups.jpg"),
        require("../images/Athletic-Trainer-Month.jpg"),
        require("../images/stretching-exercises.jpg"),
        require("../images/the-jogger-2012.jpg"),
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../images/homescreen.jpg")} style={styles.image}>
                <View style={styles.top}>
                    <ScrollView snapToInterval={assets.length} decelerationRate="fast" horizontal>
                        {assets.map((source) => (
                            <View key={source}>
                                <Image style={{ width: 365, height: 310 }} {...{ source }} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{
                    backgroundColor: 'black', marginTop: 10, marginBottom: 15, alignItems: 'center', borderWidth: 5, borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}>
                    {/* HOME PAGE */}
                    <Text style={{ fontWeight: 'bold', margin: 10, fontSize: 20, color: '#ffffff' }}> - WELCOME TO CALI-FIT - </Text>
                </View>
                <Text> Features: </Text>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.topRow}>
                        <View style={styles.box1}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{ color: '#ffffff' }}> - Pomodoro Timer - </Text>
                                <Text style={{ color: '#ffffff' }}> Pomodoro Timer, is a useful timer because it can help you organize your time. You can set a given time for your 'Work Out' and give yourself break intervals. We sought to use this timer for those main reasons and link is below:  </Text>
                                <Button title="Pomodoro" onPress={() => { props.navigation.navigate('Pomodoro Timer'); }} />
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{ color: '#ffffff' }}> - BMI Calculator - </Text>
                                <Text style={{ color: '#ffffff' }}> The BMI Calculator is an easy-to-use tool to help estimate body fat. It is also good a measure of patients' risk of heart diseases that occur with more body fat. The higher your BMI, the higher your risk of obesity-related disease. Link below:</Text>
                                <Button title="BMI" onPress={() => { props.navigation.navigate('BMI Calculator'); }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomRow}>
                        <View style={styles.box1}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{ color: '#ffffff' }}> -Motivational Quotes- </Text>
                                <Text style={{ color: '#ffffff' }}> The Purpose, we use a Motivational Quotes generator because it's common to lose motivation when continuing a 'Work Out'. Sometimes seeing inspiring quotes could help you light that fire that will help you push yourself for the next 'Work Out'. Link below:</Text>
                                <Button title="MQ" onPress={() => { props.navigation.navigate('Motivational Quotes'); }} />
                            </View>
                        </View>
                        <View style={styles.box2}>
                            <View style={{alignItems:'center'}}>
                                <Text style={{ color: '#ffffff' }}> - Future Features - </Text>
                                <Text style={{ color: '#ffffff' }}> Since we are a 'Work Out' app we intend to add more helpful features later.</Text>
                                <Text style={{ color: '#ffffff' }}> ------ </Text>
                                <Text style={{ color: '#ffffff' }}> - Such As - </Text>
                                <Text style={{ color: '#ffffff' }}> * GPS Running Tracking </Text>
                                <Text style={{ color: '#ffffff' }}> * Keeping records of your 'past' workouts </Text>
                                <Text style={{ color: '#ffffff' }}> * ETC... </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'black'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    example: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {
        flex: 1
    },
    picContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    bottomRow: {
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    box1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        marginBottom: 10,
        height: 280,
        borderRadius: 20
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        height: 280,
        borderRadius: 20
    },
});

export default ScreenOne;