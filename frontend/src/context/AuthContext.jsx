import { createContext, useCallback } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState({});

    const handleUser = useCallback((value) => {
        setUser(value)
    }, [])

  return (
    <AuthContext.Provider value={{user, handleUser}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider