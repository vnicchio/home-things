import { ReactNode, createContext, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

export type AuthContextProps = {
  user: UserDTO;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  return (
    <AuthContext.Provider value={{user}}>
    {children}
    </AuthContext.Provider>
  )
}