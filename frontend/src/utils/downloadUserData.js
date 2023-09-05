

import axios from 'axios';
export async function downloadUserData() {
    // downloads fake user data from an API
    try {
        const response = await axios.get('https://random-data-api.com/api/v2/users');
        return response.data.uid;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}