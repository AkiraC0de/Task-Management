import { createContext, useCallback } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false)

    const handleUser = useCallback((value) => {
        setUser(value)
    }, [])

    const handleIsLogin = useCallback((value) => {
        setIsLogin(value)
    }, [])

  return (
    <AuthContext.Provider value={{user, handleUser, isLogin, handleIsLogin}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider