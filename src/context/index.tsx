import { IUser } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface AppContextProviderProps {
  children: React.ReactNode;
}
export interface AppContextProps {
  viewedUsers: number[];
  markUserAsViewed: (userId: number) => void;
}
const AppContext = createContext<AppContextProps>({
  viewedUsers: [],
  markUserAsViewed: () => {},
});

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [viewedUsers, setViewedUsers] = useState<number[]>([]);

  const markUserAsViewed = (userId: number) => {
    setViewedUsers((prevViewedUsers) =>
      prevViewedUsers.includes(userId) ? prevViewedUsers.filter((id) => id !== userId) : [...prevViewedUsers, userId]
    );
  };

  return <AppContext.Provider value={{ viewedUsers, markUserAsViewed }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
