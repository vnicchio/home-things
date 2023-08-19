import { Button, ButtonIcon, ButtonText, Center, ChevronLeftIcon, Heading, Icon, Input, InputInput, Text, VStack } from "@gluestack-ui/react";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { AuthNavigationProps } from "../../routes/auth.routes";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InferType } from "yup";
import { FormInput } from "../../components/FormInput";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { api } from "../../services/axios";

type signUpSchema = {
  name: string,
  email: string,
  password: string
}

const createUserFormSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter no mínimo 6 caracteres'),
  password_confirmation: yup.string().required('Informe a senha').oneOf([yup.ref('password')], 'As senhas devem ser iguais')
});

type createUseFormData = InferType<typeof createUserFormSchema>

export function SignUp() {
  const {control, handleSubmit, formState: {errors}} = useForm<createUseFormData>({
    resolver: yupResolver(createUserFormSchema)
  });
  const navigation = useNavigation<AuthNavigationProps>()

  async function handleRegister({name, email, password}: signUpSchema) {
    try {
      await api.post('/users', {name, email, password});
    } catch (error) {
      console.log(error)
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
    <VStack height={"100%"}>
      <Button width={50} height={50} variant="link" onPress={handleGoBack}>
        <ButtonIcon as={ChevronLeftIcon}  color={"#000"} width={30} height={30} />
      </Button>
      <Center flex={1} padding={20}>
        <VStack space="md" width={"100%"}>
          <Controller 
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <FormInput 
              placeholder="Nome"
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
              />
              
            )}
          />

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

          <Controller 
            control={control}
            name="password_confirmation"
            render={({field: {onChange, value}}) => (
              <FormInput 
                placeholder="Confirme a Senha"
                autoCapitalize="none"
                type="password"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirmation?.message}
              />
            )}
          />
          
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={handleSubmit(handleRegister)}
          >
            <ButtonText>Registrar</ButtonText>
          </Button>

          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={handleGoBack}
          >
            <ButtonText>Já possui conta? Fazer Log In</ButtonText>
          </Button>
        </VStack>
      </Center>
    </VStack>
    </SafeAreaView>
  )
}