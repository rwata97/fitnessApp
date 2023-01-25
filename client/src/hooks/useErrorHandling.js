import { useState } from 'react';

const useErrorHandling = () => {
  const [errMsg, setErrMsg] = useState('');

  const errorHandling = (err) => {
    const { status } = err.request;
    if (status === 400) {
      setErrMsg('Incorrect User Name/Password combination.');
    }
  };

  return {
    errorHandling,
    errMsg,
  };
};

export default useErrorHandling;
