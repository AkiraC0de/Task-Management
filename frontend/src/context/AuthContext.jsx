import { createContext, useCallback } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(true);
    const [isValidatingEmail, setIsValidatingEmail] = useState(true);

  return (
    <AuthContext.Provider value={
      { 
        user, setUser, 
        isLogin, setIsLogin,
        isValidatingEmail, setIsValidatingEmail

      }
    }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider