import { Button, ButtonText, Center, VStack, useToast } from "@gluestack-ui/react";
import { Controller, useForm } from "react-hook-form";
import { AuthNavigationProps } from "../../routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import { FormInput } from "../../components/FormInput";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../hooks/useAuth";
import { AppError } from "../../utils/AppError";
import { Toast } from "../../components/Toast";

const signInUserFormSchema = yup.object({
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter no mínimo 6 caracteres')
});

type signInUserFormData = yup.InferType<typeof signInUserFormSchema>

export function SignIn() {
  const {control, handleSubmit, formState: {errors}} = useForm<signInUserFormData>({
    resolver: yupResolver(signInUserFormSchema)
  });
  const navigation = useNavigation<AuthNavigationProps>();

  const toast = useToast();

  const {signIn} = useAuth();

  async function handleSignIn({email, password}: signInUserFormData) {
    try {
      await signIn(email, password)
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'

      toast.show({
        placement: "top",
        render: () => {
          return (
            <Toast type="error" title={title}/>
          )
        }
      })
    }
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
              <FormInput 
                placeholder="Email"
                autoCapitalize="none"
                keyboardType={"email-address"}
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller 
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <FormInput 
                type="password"
                placeholder="Senha" 
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
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