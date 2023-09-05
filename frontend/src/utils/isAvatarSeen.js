export function isAvatarSeen() {
    const seenAvatar = sessionStorage.getItem('seenAvatar');
    return JSON.parse(seenAvatar);
}