const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
import LanguageDetector from 'i18next-browser-languagedetector';
const path = require('path');

const NextI18NextInstance = new NextI18Next({
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    otherLanguages: ['zh', 'en'],
    localeSubpaths,
    shallowRender: false,
    localePath: path.resolve('./locales'),
    parseMissingKeyHandler(key) {
        return `can't translation ${key}`;
    },
    detection: LanguageDetector,
    defaultNS: 'translation',
    ns: ['translation']
});

export default NextI18NextInstance;

export const { appWithTranslation, withTranslation } = NextI18NextInstance;
