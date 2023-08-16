import { Box, FormControl, FormControlError, FormControlErrorText, Input, InputInput } from "@gluestack-ui/react";
import { TextInputProps } from "react-native";
import { string, boolean } from "yup";

type Props = Omit<TextInputProps, "placeholderTextColor"> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  type?: 'text' | 'password'
}

export function FormInput({errorMessage = null, isInvalid = false, type = 'text', ...rest}: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid}>
      <Input variant="rounded" size="xl">
        <InputInput
          type={type}
          placeholderTextColor={"#898989"}
          {...rest}
        />
      </Input>
      <FormControlError>
        <FormControlErrorText>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}