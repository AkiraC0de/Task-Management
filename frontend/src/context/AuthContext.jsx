import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {    
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isValidatingEmail, setIsValidatingEmail] = useState(false);
    const [accessToken, setAccessToken] = useState('');

  return (
    <AuthContext.Provider value={
      { 
        user, setUser, 
        isLogin, setIsLogin,
        isValidatingEmail, setIsValidatingEmail,
        accessToken, setAccessToken
      }
    }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider