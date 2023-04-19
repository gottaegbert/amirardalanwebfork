import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const usePageviewsCount = () => {
  const { data: pageviewsCount, error } = useSWR(
    '/api/analytics/pageviews',
    fetcher,
    {
      refreshInterval: 3600000,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnMount: true,
      dedupingInterval: 0,
      revalidateOnReconnect: true,
      method: 'GET',
    }
  );

  return {
    pageviewsCount,
    error,
  };
};

export default usePageviewsCount;
