import LoginUI from './LoginUI';
import useErrorHandling from '../../hooks/useErrorHandling';
import useHttpRequest from '../../hooks/useHttpRequest';
import useRequestConfig from '../../hooks/useRequestConfig';

const LoginLogic = () => {
  // custom hooks
  const { httpFnRequest } = useHttpRequest();
  const { requestData } = useRequestConfig();
  const { errorHandling, errMsg } = useErrorHandling();

  return <LoginLogic />;
};
