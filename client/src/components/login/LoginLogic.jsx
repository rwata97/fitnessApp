import { useEffect } from 'react';
import LoginUI from './LoginUI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../store/reducers/authReducer';
import { useForm, FormProvider } from 'react-hook-form';
import useErrorHandling from '../../hooks/useErrorHandling';
import useHttpRequest from '../../hooks/useHttpRequest';
import useRequestConfig from '../../hooks/useRequestConfig';

const LoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // custom hooks
  const { httpFnRequest } = useHttpRequest();
  const { requestData } = useRequestConfig();
  const { errorHandling, errMsg } = useErrorHandling();

  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  const onSubmit = () => {
    const applyData = (data) => {
      localStorage.setItem('token', data.token);
      dispatch(
        logIn({
          payload: data.token,
        })
      );
      navigate('/');
    };
    const body = {
      // get the values from the form with library function
      username: getValues('username'),
      password: getValues('password'),
    };

    const requestConfigData = {
      body,
      endPoint: 'auth/login',
      method: 'POST',
    };

    // sets parameter for useHttp custom hook
    httpFnRequest(requestData(requestConfigData), applyData, errorHandling);
  };

  // validates form input
  const methods = useForm();

  const { getValues } = methods;

  return (
    <FormProvider {...methods}>
      <LoginUI onSubmit={onSubmit} errMsg={errMsg} />
    </FormProvider>
  );
};
export default LoginLogic;
