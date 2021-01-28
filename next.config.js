const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { zh: 'zh', en: 'en' };
module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        var d = new Date();
        return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config;
    },
    rewrites: async () => {
        const sdsd = nextI18NextRewrites(localeSubpaths);
        console.log('sdsd', sdsd);
        return sdsd;
    },
    publicRuntimeConfig: {
        localeSubpaths
    }
};
