import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

const AuthStack = createStackNavigator();


export default function App() {
  return (
    <>
       <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
          <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
       </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
