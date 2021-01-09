module.exports = {
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        var d = new Date();
        return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config;
    }
};
