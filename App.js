import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
// Screens
import { Home } from "./screens";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.createStackNavigator
        initialRouteName={''}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.createStackNavigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
};
