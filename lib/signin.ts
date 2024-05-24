

export default async function processSignIn() {
    const user = null;
    if (user.value) {
        navigateTo('/dashboard');
    } else {
        navigateTo('/auth/login');
    }
}