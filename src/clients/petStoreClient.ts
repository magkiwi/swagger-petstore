import axiosRequest, { AxiosResponse } from 'axios';
import { SERVER_URL } from 'config';


export const getPetStore = async (): Promise<AxiosResponse> =>{
    const options = {
        url: SERVER_URL,
        method: 'GET',
      }


    return axiosRequest(options).catch((e) => {
        throw(e);
      });
}

export const petStoreClient = {
    getPetStore,
  };