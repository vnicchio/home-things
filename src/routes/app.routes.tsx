import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/App/Home";
import { List } from "../screens/App/List";
import { Profile } from "../screens/App/Profile";

type AppRoutes = {
  home: undefined;
  list: undefined;
  profile: undefined;
}

export type AppNavigationProps = BottomTabNavigationProp<AppRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown:false}}>
      <Screen name="home" component={Home}/>
      <Screen name="list" component={List}/>
      <Screen name="profile" component={Profile}/>
    </Navigator>
  )
}