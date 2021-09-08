
export function getMethod(api) {
    let headers = new Headers();
    headers.append('Authorization', 'Client-ID EdKaQU2nlL5LV0a0ovXDAjLKk0-MbK2JVWMtCdc9cSs');
    const reqHeaders = {
        method: 'GET',
        headers: headers
    }
    return fetch(api,reqHeaders).then((res) => {
        return res.json();
    });
}
