export function isSessionActive() {
    const userId = sessionStorage.getItem('userId');
    console.log(userId)
    return userId !== null ? true : false;
}