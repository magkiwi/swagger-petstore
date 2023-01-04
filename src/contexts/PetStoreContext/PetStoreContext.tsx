import { FC, ReactNode, createContext, useMemo } from 'react';
import { usePetStore } from 'shared/hooks/usePetStore';
import { ContextProps } from './PetStoreContext.types';


export const defaultContext: ContextProps = {
    info: {
        description: '',
        title: '',
        version: '',
        license: {
          name: '',
          url: '',
        },
    }
  };

export const PetStoreContext = createContext(defaultContext);

export const PetStoreContextProvider: FC<{ children?: ReactNode }> = ({ children }) => { 

    const { petStoreData } = usePetStore();
    console.log(petStoreData)

    const info = useMemo(() => petStoreData.info, [petStoreData])


    return (
        <PetStoreContext.Provider
          value={{
              info,
          }}
        >
          {children}
        </PetStoreContext.Provider>
    );
}