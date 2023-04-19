import React, { useState } from 'react';

function ApiCallButton({ endpoint, params }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${endpoint}?${new URLSearchParams(params)}`);
      const data = await response.json();
      console.log(data); // 可以根据需要在控制台中打印响应数据
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return (
    <button disabled={isLoading} onClick={handleClick}>
      {isLoading ? '正在加载...' : '调用 API'}
    </button>
  );
}

export default ApiCallButton;