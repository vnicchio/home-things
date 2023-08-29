import { Heading } from "@gluestack-ui/react";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../../services/axios";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export function Home() {

  async function getUsers() {
    const {data} = await api.get("/users")
  }

  useFocusEffect(useCallback(() => {
    getUsers()
  }, []))

  return (
    <SafeAreaView>
      <Heading>Home Screen</Heading>
    </SafeAreaView>
  )
}