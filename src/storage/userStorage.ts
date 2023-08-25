import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserDTO } from "../dtos/UserDTO";
import { USER_STORAGE } from "./storageConfig";

export async function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageUserGet() {
  const response = await AsyncStorage.getItem(USER_STORAGE);
  const user: UserDTO = response ? JSON.parse(response) : {};

  return user;
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE)
}