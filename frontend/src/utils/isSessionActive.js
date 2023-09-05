export function isSessionActive() {
    //checks for userId in session
    const userId = sessionStorage.getItem('userId');
    console.log(userId)
    return userId !== null ? true : false;
}