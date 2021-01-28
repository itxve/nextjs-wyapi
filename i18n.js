const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
import LanguageDetector from 'i18next-browser-languagedetector';
const path = require('path');
module.exports = new NextI18Next({
    browserLanguageDetection: true,
    serverLanguageDetection: true,
    otherLanguages: ['zh'],
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
