import constants from './constants';

export default async function processSignIn() {
    const url = constants.URL_APP;
    await navigateTo(url, {
        external: true,
    });
}
