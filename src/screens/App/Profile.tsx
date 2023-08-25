import { Button, ButtonText, Heading } from "@gluestack-ui/react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";

export function Profile() {
  const {signOut} = useAuth();
  return (
    <SafeAreaView>
      <Heading>
        Profile Screen
      </Heading>
      <Button onPress={signOut}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </SafeAreaView>
  )
}