import {getMethod} from '../apiHandler';
 export const fetchSlidersData = (payload) => {
    try{
        return getMethod("https://api.unsplash.com/search/photos?page=1&query=car");
    }catch(e) {
        //TODO handle erros
        console.error(e);
        return {error:true};
    }
}