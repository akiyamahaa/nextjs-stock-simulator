"use client";

// context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { checkUser } from "@/lib/checkUser";
import { IUser } from "@/types/user";

// Define the shape of your context data
interface UserContextType {
  user: IUser; // Adjust this to match your user data type
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

// Create a context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  // Fetch user data and store it in state when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await checkUser();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext easily
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
