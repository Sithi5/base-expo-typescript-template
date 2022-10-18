import dotenv from 'dotenv';

dotenv.config();

export default {
    expo: {
        name:
            process.env.BUILD_MODE === 'PROD'
                ? 'Sithi5BaseExpoTemplate'
                : 'Sithi5BaseExpoTemplate (DEV)',
        description: 'A basic expo template using typescript.',
        slug: 'Sithi5BaseExpoTemplate',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/images/icon.png',
        scheme: 'sithi5baseexpotemplate',
        userInterfaceStyle: 'automatic',
        splash: {
            image: './assets/images/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier:
                process.env.BUILD_MODE === 'PROD'
                    ? 'com.sithi5baseexpotemplate'
                    : 'com.sithi5baseexpotemplate.dev',
            buildNumber:
                process.env.VERSION_CODE !== undefined
                    ? '1.0.' + process.env.VERSION_CODE
                    : '1.0.0',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/images/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            package:
                process.env.BUILD_MODE === 'PROD'
                    ? 'com.sithi5baseexpotemplate'
                    : 'com.sithi5baseexpotemplate.dev',
            versionCode:
                process.env.VERSION_CODE !== undefined ? parseInt(process.env.VERSION_CODE) : 1,
        },
        web: {
            favicon: './assets/images/favicon.png',
        },
        extra: {
            BUILD_MODE: process.env.BUILD_MODE || null,
            VERSION_CODE: process.env.VERSION_CODE || null,
        },
        owner: 'Sithis',
    },
};
