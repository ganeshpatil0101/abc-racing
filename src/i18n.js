import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug:true,
        fallbackLng: 'en',
        resources:{
            en:{
                translation:{
                    slider:{
                        title: "Hello, Slider Test"
                    },
                    generic:{
                        slider:'Slider Test',
                        topracers: 'Top Racers 1',
                        fixtures: 'Fixtures'
                    }
                }
            },
            sp:{
                translation:{
                    slider:{
                        title: "Hola, Deslizado"
                    },
                    generic:{
                        slider:'Deslizado',
                        topracers: 'Mejores corredores',
                        fixtures: 'Accesorios'
                    }
                }
            }
        }
    })
