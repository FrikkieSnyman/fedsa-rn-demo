import "react-native-gesture-handler";
import { GluestackUIProvider, config } from "@gluestack-ui/react";
import { Home } from "./components/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { DetailedItem } from "./components/screens/DetailedItem";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="DetailedItem"
            component={DetailedItem}
            options={{
              title: "Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
