import { themePalette } from "shared/styles/muiTheme";


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


  