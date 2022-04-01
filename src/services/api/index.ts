import axios from "axios"

const baseUrhl = 'https://instagramclone-306f1-default-rtdb.firebaseio.com'

const api = axios.create({
    baseURL: baseUrhl,
    headers: {
        "Content-type": "application/json"
    }
});

export { api }