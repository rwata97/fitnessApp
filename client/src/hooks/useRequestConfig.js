const useRequestConfig = () => {
  const requestData = (requestConfigData) => {
    const requestConfig = {
      url: `https://dummyjson.com/${requestConfigData.endPoint}`,
      method: requestConfigData.method,
      body: requestConfigData.body,
      headers: { 'Content-Type': 'application/json' },
    };
    return requestConfig;
  };

  return {
    requestData,
  };
};

export default useRequestConfig;
