import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen } from "../Screens/Components/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "../Screens/Components/LoginScreen/LoginScreen";
import { Home } from "../Screens/mainScreen/Home";
import { MapScreen } from "../Screens/mainScreen/MapScreen";
import { CommentsScreen } from "../Screens/mainScreen/CommentsScreen";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  isAuth = true;
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <MainStack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
        name="Коментарі"
        component={CommentsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
    </MainStack.Navigator>
  );
};
