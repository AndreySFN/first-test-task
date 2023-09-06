import { useEffect, useState } from 'react';
import { axiosInstance } from './baseApi';

//TODO: отлов ошибок. Переформировать API
export const useApi = <T>(url: string) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    void axiosInstance
      .get(url)
      .then(data => {
        setResult(data);
      })
      .finally(() => setIsLoading(false));
  }, [url]);
  return { result, isLoading };
};
