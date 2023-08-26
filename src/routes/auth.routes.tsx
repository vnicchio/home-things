import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "../screens/Auth/SignIn";
import { SignUp } from "../screens/Auth/SignUp";

type AuthProps = {
  signIn: undefined;
  signUp: undefined;
}

export type AuthNavigationProps = NativeStackNavigationProp<AuthProps>

const {Navigator, Screen} = createNativeStackNavigator<AuthProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="signIn" component={SignIn}/>
      <Screen name="signUp" component={SignUp}/>
    </Navigator>
  )
}