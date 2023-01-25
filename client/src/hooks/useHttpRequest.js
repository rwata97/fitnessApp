import axios from 'axios';

const useHttpRequest = () => {
  const sendRequest = async (requestConfig, applyData, errorHandling) => {
    try {
      const res = await axios({
        url: requestConfig.url,
        method: requestConfig.method ? requestConfig.method : 'GET',
        data: requestConfig.body ? requestConfig.body : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      const data = res.data;
      applyData(data);
    } catch (err) {
      errorHandling(err);
    }
  };

  return {
    httpFnRequest: sendRequest,
  };
};

export default useHttpRequest;
