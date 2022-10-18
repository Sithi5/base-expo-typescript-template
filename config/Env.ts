import Constants from 'expo-constants';

function getBuildMode() {
    const BUILD_MODE = Constants?.expoConfig?.extra?.BUILD_MODE;
    if (!BUILD_MODE) {
        throw new Error('BUILD_MODE is missing.');
    }
    return BUILD_MODE;
}

const BUILD_MODE = getBuildMode();

export default {
    BUILD_MODE,
};
