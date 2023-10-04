import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieDetail from "../screens/MovieDetailScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import { Colors } from "../constants";
import TabStack from "../components/Tab/TabStack";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Movies App"
          component={TabStack}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primary100 },
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: true,
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#273646",
            },
            headerTintColor: "white",
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detail"
          component={MovieDetail}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
                label="Back to List"
                labelVisible={true}
              />
            ),
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
