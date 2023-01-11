import { FC, ReactNode, createContext, useMemo } from 'react';
import { REF_MAPPER } from 'shared/helpers/helper';
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
    const refMapper = useMemo(() => REF_MAPPER(petStoreData.definitions || {}) || {}, [petStoreData]);

    const paths = useMemo(() => {
      const allPaths = []

      for (let [key, value] of Object.entries(rawPaths) as Entries<typeof rawPaths>){
        for (let [method, detail] of Object.entries(value) as Entries<typeof rawPaths>) {

          const ob = { 
            tag: new Set(detail.tags), 
            endpoint: key, 
            method,
            detail,
          }

          for (let [i, parameter] of Object.entries(detail.parameters) as Entries<typeof rawPaths>) {
            if (parameter.hasOwnProperty('schema')) {
              let stringSchema = JSON.stringify(parameter.schema)
              for (const [k, v] of Object.entries(refMapper)){
                stringSchema = stringSchema.replace(k, v)
                ob.detail.parameters[i].schema = JSON.parse(stringSchema)
              }
            }
          }
          for (let [i, response] of Object.entries(detail.responses) as Entries<typeof rawPaths>) {
            if (response.hasOwnProperty('schema')) {
              let stringSchema = JSON.stringify(response.schema)
              for (const [k, v] of Object.entries(refMapper)){
                stringSchema = stringSchema.replace(k, v)
                ob.detail.responses[i].schema = JSON.parse(stringSchema)
              }
            }
          }

          allPaths.push(ob)
          }   
        }

        return allPaths
    }, [rawPaths, refMapper])

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