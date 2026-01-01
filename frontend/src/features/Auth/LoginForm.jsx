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
import KeepLoginInput from "./KeepLoginInput";
import { handleChangeObject, onChangeRemoveError } from '../../utils/handler'
import Spinner from "../../components/Spinner";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setIsLogin } = useAuth();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ errors, setErrors] = useState({})
  const [ loginData, setLoginData ] = useState(LOGIN_DATA_DEFAULT);

  const handleInputsOnChance = (e) => {
    handleChangeObject(e, setLoginData);
    onChangeRemoveError(e, errors, setErrors);
  }

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setErrors({});

    const validation = validateFields(loginData);
    if(!validation.isValid){
      console.log(validation)
      setErrors(validation.errors)
      return;
    } 

    setIsLoading(true);
    try {
      const response = await loginUser(loginData);

      console.log(response)

      setUser(response.data.data);
      setIsLogin(true);
      // THIS NEED TO BE UPDATE WHEN THE DASHBOARD PAGE HAS BEEN ESTABLISHED
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
    <form className="w-full" onSubmit={handleSubmit} noValidate>
      <LoginInputs 
        loginData={loginData} 
        InputOnchangeHandler={handleInputsOnChance}
        errors={errors}
      />
      <div className="flex justify-between mt-2 mb-4">
        <KeepLoginInput
          value={loginData.keepMeLogin}
          onChange={(e) => setLoginData(prev => ({...prev, keepMeLogin: e.target.value }))}
        />
        <ForgotPassword/>
      </div>
      <div className="my-2">
        <PrimaryButton 
          type='submit'
          className="w-full flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? <Spinner/> : "LOGIN"}
        </PrimaryButton>
      </div>
    </form>
  )
}

export default LoginForm