import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import React from "react";
import { AppRoutes } from "./app.routes";
import { SafeAreaView } from "react-native-safe-area-context";

export function Routes() {
  return (
    <NavigationContainer >
        <AppRoutes />
    </NavigationContainer>
  )
}