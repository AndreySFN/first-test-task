import { useEffect, useState } from 'react';
import { axiosInstance } from '../baseApi';

export const useApi = <T>(url: string) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    void axiosInstance
      .get<T>(url)
      .then(({ data }) => {
        setResult(data);
      })
      .finally(() => setIsLoading(false));
  }, [url]);
  return { result, isLoading };
};
