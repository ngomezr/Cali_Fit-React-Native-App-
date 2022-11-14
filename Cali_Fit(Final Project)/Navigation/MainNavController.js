import * as React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Screen Imports
import ScreenOne from '../Screens/ScreenOne.js';
import RandomQuotes from '../Screens/RandomQuotes.js';
import PomodoroTimer from '../Screens/PomodoroTimer.js';
import BMI from '../Screens/BMI_Calculator.js';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
            tintColor: '#ffffff'
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContentOptions={{
      activeTintColor: 'black',
      itemStyle: { marginVertical: 5 },
    }}>
      <Drawer.Screen name="Home" component={HomeScreenStack} />
      <Drawer.Screen name="BMI Calculator" component={BMIStack} />
      <Drawer.Screen name="Pomodoro Timer" component={PomodoroStack} />
      <Drawer.Screen name="Motivational Quotes" component={RandomQStack} />
    </Drawer.Navigator>
  );
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />, headerStyle: { backgroundColor: 'black', },
      headerTintColor: '#ffffff', headerTitleStyle: { fontWeight: 'bold', }, headerTitleAlign: 'center'
    }} >
      <Stack.Screen name="CALI-FIT" component={ScreenOne} />
    </Stack.Navigator>
  );
};

const PomodoroStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />, headerStyle: { backgroundColor: 'black', },
      headerTintColor: '#ffffff', headerTitleStyle: { fontWeight: 'bold', }, headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Pomodoro Timer" component={PomodoroTimer} />
    </Stack.Navigator>
  );
};

const RandomQStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />, headerStyle: { backgroundColor: 'black', },
      headerTintColor: '#ffffff', headerTitleStyle: { fontWeight: 'bold', }
    }}>
      <Stack.Screen name="Motivational Quotes" component={RandomQuotes} />
    </Stack.Navigator>
  );
};

const BMIStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />, headerStyle: { backgroundColor: 'black', },
      headerTintColor: '#ffffff', headerTitleStyle: { fontWeight: 'bold', }, headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="BMI Calculator" component={BMI} />
    </Stack.Navigator>
  );
};

// function MyBottomTabNavigator() {
//   return (
//     <Tab.Navigator tabBarOptions={{
//       activeTintColor: 'green',
//       inactiveTintColor: 'gray',
//     }}>
//       <Tab.Screen options={{ tabBarBadge: 3 }} name="Home" component={HomeScreenStack} />
//     </Tab.Navigator>
//   );
// }

export { HomeScreenStack, MyDrawer };