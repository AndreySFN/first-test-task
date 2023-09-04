import axios from 'axios';
import { useEffect, useState } from 'react';
import { Endpoints } from './endpoints';

export const useApi = <T>(url: string) => {
  const [result, setResult] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    void axios
      .get<T>(url, {
        baseURL: Endpoints.BASE_URL(),
      })
      .then(({ data }) => setResult(data))
      .finally(() => setIsLoading(false));
  }, [url]);
  return { result, isLoading };
};
