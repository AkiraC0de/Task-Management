import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"


const ProtectedRoutes = ({children}) => {
  const { isLogin } = useAuth();

  if(!isLogin){
    return <Navigate to='/login'/>
  }

  return children
}

export default ProtectedRoutes