// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        components: './components',
                        navigation: './navigation',
                        globals: './globals',
                        screens: './screens',
                        hooks: './hooks',
                        redux_toolkit: './redux_toolkit',
                        config: './config',
                        api: './api',
                        utils: './utils',
                        types: './types',
                        languages: './languages',
                    },
                    root: ['.'],
                },
            ],
        ],
    };
};
