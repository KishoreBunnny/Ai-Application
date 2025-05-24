"use client"
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ProfileContentContext = createContext();

// 2. Create Provider Component
export const ProfileContentProvider = ({ children }) => {
    const [isOpen,setIsOpen]=useState(false);
    const [profileStack,setProfileStack]=useState(1)

  return (
    <ProfileContentContext.Provider value={{ isOpen, setIsOpen , profileStack ,setProfileStack }}>
      {children}
    </ProfileContentContext.Provider>
  );
};

// 3. Custom Hook for using context easily
export const useProfileContent = () => {
  return useContext(ProfileContentContext);
};
