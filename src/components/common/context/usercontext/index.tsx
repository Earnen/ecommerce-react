import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../../../../interfaces/user";

export interface UserContextType {
  user: User;
  setUser: Function;
}

export const userContext = createContext({} as UserContextType);

export const UsersContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState({} as User);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}
