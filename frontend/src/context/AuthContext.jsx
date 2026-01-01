import { createContext, useCallback } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isValidatingEmail, setIsEmailValidating] = useState(false);

  return (
    <AuthContext.Provider value={
      { 
        user, setUser, 
        isLogin, setIsLogin,
        isValidatingEmail, setIsEmailValidating
      }
    }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider