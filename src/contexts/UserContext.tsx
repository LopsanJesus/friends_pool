import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  userId: string | null;
  setUserId: (id: string) => void;
  userPk: string | null;
  setUserPk: (pk: string) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | "">(() => {
    return localStorage.getItem("userId") || "";
  });

  const [userPk, setUserPk] = useState<string | "">(() => {
    return localStorage.getItem("userPk") || "";
  });

  const [userName, setUserName] = useState<string | "">(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("userPk", userPk);
    localStorage.setItem("userName", userName);
  }, [userId, userName, userPk]);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userPk, setUserPk, userName, setUserName }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
