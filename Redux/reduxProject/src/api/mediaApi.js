import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export async function fetchPhotos(query, page=1, per_page=20){
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params:{query, page, per_page},//query--jaise me cat ki hi photos fetch krna chahti hu ya something like that goes in params as query which im giving while calling this function
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}//access key is paced in headers
    })
    return res.data
}