export const fetchSlidersData = (payload) => {
    try{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{ 
                console.log('wait hover ');
                resolve({
                    data: {'imgs':['url1', 'url2']}
                });
            }, 2000);
        }); 
    }catch(e) {
        //TODO handle erros
        console.error(e);
        return {error:true};
    }
}