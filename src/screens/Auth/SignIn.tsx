import { Button, ButtonText, Center, Input, InputInput, VStack } from "@gluestack-ui/react";
import { Controller, useForm } from "react-hook-form";
import { AuthNavigationProps } from "../../routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation<AuthNavigationProps>();

  function handleSignIn(data: any) {
    console.log(data);
  }

  function handleSignUp() {
    navigation.navigate('signUp');
  }

  return (
    <Center flex={1} padding={20}>
      <VStack space="md" width={"100%"}>
        <Controller 
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <Input variant="rounded" size="xl">
              <InputInput 
                placeholder="Email" 
                placeholderTextColor={"#898989"} 
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            </Input>
          )}
        />
        
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={handleSubmit(handleSignIn)}
        >
          <ButtonText>Entrar</ButtonText>
        </Button>
        <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={handleSubmit(handleSignUp)}
        >
          <ButtonText>Não possui conta? Registre-se</ButtonText>
        </Button>
      </VStack>
    </Center>
  )
}