import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Button, TextInput, Vibration, Platform, Keyboard, ImageBackground } from 'react-native';

const PomodoroTimer = () => {
    const [timer, setTimer] = useState(1500);
    const [totalTimer, setTotalTimer] = useState(0);

    // work timer min and seconds
    const [workMin, setWorkMin] = useState(25);
    const [workSec, setWorkSec] = useState(0);

    // break timer min and seconds
    const [breakMin, setBreakMin] = useState(5);
    const [breakSec, setBreakSec] = useState(0);

    // will use to check if its on break timer or work timer
    const [onBreak, setOnBreak] = useState(false);

    // will use to check if timer is running
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalID = null;

        if (timer === 0 && isRunning) {
            Vibration.vibrate()
            setOnBreak((onBreak) => !onBreak)

            if (onBreak) {
                setTimer(workMin * 60 + workSec)
            } else {
                setTimer(breakMin * 60 + breakSec)
            }
        }
        else if (isRunning) {
            intervalID = setInterval(() => {
                setTimer((time) => time - 1)
                setTotalTimer((time) => time + 1)
            }, 1000);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [timer, workMin, workSec, breakMin, breakSec, onBreak, isRunning]);

    // formatting the clock with this function 
    const clockDisplay = (time) => {
        const minutes = String(Math.floor(time / 60))
        const seconds = String(Math.floor(time % 60))

        const minuteDisplay = minutes.length === 1 ? '0' + minutes : minutes
        const secondDisplay = seconds.length === 1 ? '0' + seconds : seconds

        return `${minuteDisplay}:${secondDisplay}`
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ImageBackground source={require('../images/timerBG.jpg')} style={styles.image}>

                <View style={styles.keyboardAvoidingViewContainer}>
                    {/* Displays the Title, if its on the Work or Break Timer, and the Timer itself  */}
                    <Text style={styles.title}>Pomodoro Timer</Text>
                    <Text style={styles.subtitle}>{`${onBreak === false ? 'WorkOut' : 'Break'} Time`}</Text>
                    <Text style={styles.clockFont}>{clockDisplay(timer)}</Text>

                    {/* Row for work time user inputs with starting values being 25 minutes and 0 seconds */}
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Text style={styles.textFont}>WorkOut Time : </Text>
                        </View>

                        <View style={styles.userInputContainer}>
                            <TextInput
                                style={styles.userTimerInput}
                                keyboardType='numeric'
                                defaultValue="25"
                                onChangeText={(minuteValue) => {
                                    if (!onBreak) {
                                        setTimer(+minuteValue * 60 + workSec);
                                    }
                                    setWorkMin(+minuteValue === '' ? 0 : +minuteValue);
                                    setIsRunning(false);
                                }}
                            />
                        </View>

                        <View style={styles.userInputContainer}>
                            <TextInput
                                style={styles.userTimerInput}
                                keyboardType="numeric"
                                defaultValue="00"
                                onChangeText={(secondValue) => {
                                    if (!onBreak) {
                                        setTimer(workMin * 60 + +secondValue);
                                    }
                                    setWorkSec(+secondValue === '' ? 0 : +secondValue);
                                    setIsRunning(false);
                                }}
                            />
                        </View>

                    </View>

                    {/* Row for break time user inputs with starting values at 5 minutes and 0 seconds */}
                    <View style={{ flexDirection: 'row' }}>

                        <View>
                            <Text style={styles.textFont}>Break Time : </Text>
                        </View>

                        <View style={styles.userInputContainer}>
                            <TextInput
                                style={styles.userTimerInput}
                                keyboardType="numeric"
                                defaultValue="05"
                                onChangeText={(minuteValue) => {
                                    if (onBreak) {
                                        setTimer(+minuteValue * 60 + breakSec);
                                    }
                                    setBreakMin(+minuteValue === '' ? 0 : +minuteValue);
                                    setIsRunning(false);
                                }}
                            />
                        </View>

                        <View style={styles.userInputContainer}>
                            <TextInput
                                style={styles.userTimerInput}
                                keyboardType="numeric"
                                defaultValue="00"
                                onChangeText={(secondValue) => {
                                    if (onBreak) {
                                        setTimer(breakMin * 60 + +secondValue);
                                    }
                                    setBreakSec(+secondValue === '' ? 0 : +secondValue);
                                    setIsRunning(false);
                                }}
                            />
                        </View>

                    </View>

                    <View>
                        <Text style={styles.textFont}>Total Session Time: {clockDisplay(totalTimer)}</Text>
                    </View>

                    {/* Display bottom row with Start/Stop button and Reset button */}
                    <View style={{ flexDirection: 'row' }}>

                        <View style={styles.button}>
                            <Button title={isRunning ? 'Stop' : 'Start'} color="black" onPress={() => setIsRunning((isRunning) => !isRunning)} />
                        </View>

                        <View style={styles.button}>
                            <Button title="Reset" color="black" onPress={() => setTimer(onBreak === false ? workMin * 60 + workSec : breakMin * 60 + breakSec)} />
                        </View>

                    </View>

                    <View style={styles.recordbutton}>
                        <Button title="Record Your Session" color="black" onPress={() => setTotalTimer(0)}/>
                    </View>

                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    keyboardAvoidingViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#00F041',
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 10,
        borderRadius: 10,
    },
    subtitle: {
        color: '#00F041',
        backgroundColor: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 10,
    },
    clockFont: {
        color: '#00F041',
        textAlign: 'center',
        fontSize: 70,
        marginBottom: 15,
    },
    userInputContainer: {
        padding: 10,
    },
    textFont: {
        color: '#00F041',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        justifyContent: 'space-between',
    },
    userTimerInput: {
        color: '#00F041',
        fontSize: 15,
        height: 30,
        width: 60,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 15,
    },
    button: {
        borderWidth: 1,
        width: 100,
        padding: 5,
        justifyContent: 'space-between',
    },
    recordbutton: {
        borderWidth: 1,
        width: 200,
        padding: 5,
        justifyContent: 'space-between',
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default PomodoroTimer;