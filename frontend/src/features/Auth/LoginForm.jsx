import { useState, useCallback } from "react";
import LoginInputs from "./LoginInputs";
import PrimaryButton from "../../components/PrimaryButton";
import ForgotPassword from "./ForgotPassword";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils/errorHandler";
import { loginUser } from "./service";
import LoadingOverlay from "../../components/LoadingOverlay";

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleUser, handleIsLogin } = useAuth();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ loginData, setLoginData ] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = useCallback(async (e) => {
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
    <form onSubmit={handleSubmit}>
      { isLoading && <LoadingOverlay/>}
      <LoginInputs loginData={loginData} loginDataHandler={setLoginData}/>

      <ForgotPassword/>
      <PrimaryButton 
        type='submit'
        className='my-5'
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Login"}
      </PrimaryButton>
    </form>
  )
}

export default LoginForm