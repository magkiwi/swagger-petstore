import { FC, ReactNode, createContext, useMemo } from 'react';
import { usePetStore } from 'shared/hooks/usePetStore';
import { ContextProps } from './PetStoreContext.types';

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];



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
    tags: [],
    paths: [],
  };

export const PetStoreContext = createContext(defaultContext);

export const PetStoreContextProvider: FC<{ children?: ReactNode }> = ({ children }) => { 


    const { petStoreData } = usePetStore();
    const info = useMemo(() => petStoreData.info, [petStoreData])
    const tags = useMemo(() => petStoreData.tags || [], [petStoreData]);
    const rawPaths = useMemo(() => petStoreData.paths || [], [petStoreData]);

    const paths = useMemo(() => {
      const allPaths = []

      for (let [key, value] of Object.entries(rawPaths) as Entries<typeof rawPaths>){
        for (let [k, v] of Object.entries(value) as Entries<typeof rawPaths>) {

          const ob = { 
            tag: new Set(v.tags), 
            endpoint: key, 
            method: k,
            detail: v
          }
          allPaths.push(ob)
          }   
        }

        return allPaths
    }, [rawPaths])

    console.log(paths)


    return (
        <PetStoreContext.Provider
          value={{
              info,
              tags,
              paths,
          }}
        >
          {children}
        </PetStoreContext.Provider>
    );
}