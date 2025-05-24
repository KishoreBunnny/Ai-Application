"use client"
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const MiniBotContentContext = createContext();

// 2. Create Provider Component
export const MiniBotContentProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [input,setInput]=useState("")
    const [output,setOutput]=useState("")
    const [loading, setLoading] = useState(false)
   // const [profileStack,setProfileStack]=useState(1)

  return (
    <MiniBotContentContext.Provider value={{ toggle, setToggle ,input,setInput,output,setOutput,loading,setLoading}}>
      {children}
    </MiniBotContentContext.Provider>
  );
};

// 3. Custom Hook for using context easily
export const useMiniBotContent = () => {
  return useContext(MiniBotContentContext);
};
