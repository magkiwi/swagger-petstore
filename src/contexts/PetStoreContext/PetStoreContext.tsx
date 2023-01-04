import { FC, ReactNode, createContext, useMemo } from 'react';
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
    tabs: []
  };

export const PetStoreContext = createContext(defaultContext);

export const PetStoreContextProvider: FC<{ children?: ReactNode }> = ({ children }) => { 

    const { petStoreData } = usePetStore();
    console.log(petStoreData)

    const info = useMemo(() => petStoreData.info, [petStoreData])
    const tabs = useMemo(() => petStoreData.tabs, [petStoreData])
    


    return (
        <PetStoreContext.Provider
          value={{
              info,
              tabs,
          }}
        >
          {children}
        </PetStoreContext.Provider>
    );
}