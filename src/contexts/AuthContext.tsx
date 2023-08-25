import { ReactNode, createContext, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/axios";
import { storageUserSave } from "../storage/userStorage";
import { storageAuthTokenSave } from "../storage/authStorage";

export type AuthContextProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({children}: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  function updateUserAndToken(user: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(user);
  }

  async function storageUserAndToken(user: UserDTO, token: string, refreshToken: string) {
    await storageUserSave(user);
    await storageAuthTokenSave({token, refreshToken})
  }

  async function signIn(email: string, password: string) {
    try {
      const {data} = await api.post("/sessions", {email, password})

      if (data.user && data.token && data.refreshToken) {
        await storageUserAndToken(data.user, data.token, data.refreshToken)
        updateUserAndToken(data.user, data.token)
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{user, signIn}}>
    {children}
    </AuthContext.Provider>
  )
}