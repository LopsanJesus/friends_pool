import { ReactNode, createContext, useEffect, useState } from "react";

import useUserStorage from "hooks/useUserStorage";

export interface UserContextType {
  userId: string | undefined;
  setUserId: (id?: string) => void;
  userPk: string | undefined;
  setUserPk: (pk?: string) => void;
  userName: string | undefined;
  setUserName: (name?: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const {
    getUserIdFromStorage,
    getUserPkFromStorage,
    getUserNameFromStorage,
    setUserIdToStorage,
    setUserPkToStorage,
    setUserNameToStorage,
  } = useUserStorage();

  const [userId, setUserId] = useState<string | undefined>(() =>
    getUserIdFromStorage()
  );

  const [userPk, setUserPk] = useState<string | undefined>(() =>
    getUserPkFromStorage()
  );

  const [userName, setUserName] = useState<string | undefined>(() =>
    getUserNameFromStorage()
  );

  useEffect(() => {
    if (userId && userPk && userName) {
      setUserIdToStorage(userId);
      setUserPkToStorage(userPk);
      setUserNameToStorage(userName);
    }
  }, [
    setUserIdToStorage,
    setUserNameToStorage,
    setUserPkToStorage,
    userId,
    userName,
    userPk,
  ]);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userPk, setUserPk, userName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
