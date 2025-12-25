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
import Spinner from "../components/Spinner"

const Login = () => {
  const navigate = useNavigate();

  const { handleUser, handleIsLogin } = useAuth();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ loginData, setLoginData ] = useState({
    email: '',
    password: ''
  });

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginUser(loginData);

      handleUser(response.data);
      handleIsLogin(true);
      navigate('/')
    } catch (error) {
      const message = getErrorMessage(error);
      console.error(message);
    } finally {
      setIsLoading(false);
    }
    
  }, [loginData])

  return (
    <form 
    onSubmit={onSubmit}
    className='w-full p-6'>
      <AuthHeader state='login'/>
      {isLoading &&
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-200 bg-black/25">
          <Spinner/>
        </div>
      }

      <LoginInputs loginData={loginData} loginDataHandler={setLoginData}/>

      <ForgotPassword/>
      <PrimaryButton 
        type='submit'
        className='my-5'
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Login"}
      </PrimaryButton>
      <SwitchMessage state='login'/>
    </form>
  )
}

export default Login