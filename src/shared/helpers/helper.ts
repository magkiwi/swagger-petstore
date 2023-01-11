import { themePalette } from "shared/styles/muiTheme";

export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];

export const COLOR_MAP = {
    get: themePalette.palette.secondary.main,
    post: themePalette.palette.success.main,
    delete: themePalette.palette.error.main,
    put: themePalette.palette.info.main
};

export const OPACITY_COLOR_MAP = {
    get: 'rgba(97,175,254,.1)',
    post: 'rgba(73,204,144,.1)',
    delete: 'rgba(249,62,62,.1)',
    put: 'rgba(252,161,48,.1)'
};

// It is not the best idea to do this in this way - SHOULD BE FIXED
export const REF_MAPPER = ({...definitions}) => {
    const mapper: Record<string, string> = {}
    for (const [key, value] of Object.entries(definitions) as Entries<typeof definitions>){
        let fullKey = `{"$ref":"#/definitions/${key}"}`
        let finalKey = JSON.stringify(JSON.parse(fullKey))
        mapper[finalKey] = JSON.stringify(value['properties'])
    }
    return mapper
}


  