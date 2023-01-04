import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { cacheKeys } from 'config';
import { petStoreClient } from 'clients/petStoreClient';


export const usePetStore = () => {
  const { data: { data: petStore } = {}, status, error } = useQuery(
    [cacheKeys.getPetStore],
    () => petStoreClient.getPetStore(),
  );

  return {
    status,
    error: error as AxiosError,
    petStore: petStore || [],
  };
};