import { FC, ReactNode, createContext, useMemo, useEffect } from 'react';
import { usePetStore } from 'shared/hooks/usePetStore';
import { ContextProps } from './PetStoreContext.types';


export const defaultContext: ContextProps = {
    info: {
        contact: {
          email: ''
        },
        description: '',
        title: '',
        version: '',
        license: {
          name: '',
          url: '',
        },
        termsOfServices: ''
    },
    tags: []
  };

export const PetStoreContext = createContext(defaultContext);

export const PetStoreContextProvider: FC<{ children?: ReactNode }> = ({ children }) => { 

    const { petStoreData } = usePetStore();

    const info = useMemo(() => petStoreData.info, [petStoreData])
    const tags = useMemo(() => petStoreData.tags || [], [petStoreData]);
    const paths = useMemo(() => petStoreData.paths, [petStoreData]);


    return (
        <PetStoreContext.Provider
          value={{
              info,
              tags,
          }}
        >
          {children}
        </PetStoreContext.Provider>
    );
}