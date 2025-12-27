import { useState, useCallback } from "react";
import LoginInputs from "./LoginInputs";
import PrimaryButton from "../../components/PrimaryButton";
import ForgotPassword from "./ForgotPassword";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getErrorMessage, getErrorSource } from "../../utils/errorHandler";
import { loginUser } from "./service";
import LoadingOverlay from "../../components/LoadingOverlay";
import { validateFields } from "../../utils/formValidation";
import { LOGIN_DATA_DEFAULT } from "../../constants/authConstant";

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleUser, handleIsLogin } = useAuth();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errors, setErrors] = useState({})
  const [ loginData, setLoginData ] = useState(LOGIN_DATA_DEFAULT);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrors({});

    const validation = validateFields(loginData);
    if(!validation.isValid){
      setErrors(validation.errors)
      return;
    } 

    setIsLoading(true);
    try {
      const {data} = await loginUser(loginData);

      handleUser(data.data);
      handleIsLogin(true);
      navigate('/')
    } catch (error) {
      const errorAt = getErrorSource(error);
      const message = getErrorMessage(error);

      if(errorAt){
        setErrors({ [errorAt] : message });
      } else {
        setErrors({ server : message });
      }
    } finally {  
      setIsLoading(false);
    }
  }, [loginData])

  return (
    <form onSubmit={handleSubmit} novalidate>
      { isLoading && <LoadingOverlay/>}
      <LoginInputs 
        loginData={loginData} 
        loginDataHandler={setLoginData}
        errors={errors}
        errorsHandler={setErrors}
      />
      <ForgotPassword/>
      <div className="text-center my-2">
        <PrimaryButton 
          type='submit'
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "PROCESSING..." : "LOGIN"}
        </PrimaryButton>
      </div>
    </form>
  )
}

export default LoginForm