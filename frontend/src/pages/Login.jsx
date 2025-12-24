import AuthHeader from "../features/Auth/AuthHeader"
import LoginInputs from "../features/Auth/LoginInputs"
import ForgotPassword from "../features/Auth/ForgotPassword"
import PrimaryButton from "../components/PrimaryButton"
import SwitchMessage from "../features/Auth/SwitchMessage"

import useAuth from "../hooks/useAuth"
import { useCallback, useState } from "react"
import { loginUser } from "../features/Auth/service"
import { useNavigate } from "react-router-dom"
import { getErrorMessage } from "../utils/errorHandler"

const Login = () => {
  const navigate = useNavigate();

  const { handleUser, handleIsLogin } = useAuth();
  const [ loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(loginData);

      handleUser(response.data);
      handleIsLogin(true);
      navigate('/')
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(message);
    }
    
  }, [loginData])

  return (
    <form 
    onSubmit={onSubmit}
    className='w-full p-6'>
      <AuthHeader state='login'/>

      <LoginInputs loginData={loginData} loginDataHandler={setLoginData}/>

      <ForgotPassword/>
      <PrimaryButton 
        type='submit'
        className='my-5'>
        Login
      </PrimaryButton>
      <SwitchMessage state='login'/>
    </form>
  )
}

export default Login