import global_ar from './Ar/global.json'
import global_fr from './Fr/global.json'
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    interpolation: {escapeValue: false},
    lng: 'ar',
    resources:{
      fr:{
        global: global_fr
      },
      ar:{
        global: global_ar
      },
    }
  })
export default i18n;