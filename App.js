{/*https://expo.dev/@petegarden/StickerSmash?serviceType=classic&distribution=expo-go*/}


import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0) 0%",
            border: "none",
          },
          tabBarLabelPosition: "below-icon",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Alert"
          component={DetailsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-alert-circle-outline" color={color} size={size}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
