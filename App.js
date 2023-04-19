import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="News"
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
          }}
        />
        <Tab.Screen
          name="News"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Event"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Alerte Generale"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
