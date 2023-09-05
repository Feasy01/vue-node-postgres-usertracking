export function isAvatarSeen() {
    // checks in the session if the avatar has been seen to save backend bandwidth
    const seenAvatar = sessionStorage.getItem('seenAvatar');
    return JSON.parse(seenAvatar);
}