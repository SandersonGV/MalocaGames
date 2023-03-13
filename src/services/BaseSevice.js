export class BaseSevice {
    constructor(baseUrl,apikey) {
        this.baseurl = baseUrl;
        this.apikey = apikey;
        this.get = async (url, params) => {
            let result = await fetch(this.baseurl + url, {
                method: 'GET',
                headers:{
                    'cache-control': 'no-cache',
                    'x-apikey': apikey
                }
            })
            return await result.json()
        }
    }
}