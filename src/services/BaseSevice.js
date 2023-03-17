export class BaseSevice {
    constructor(baseUrl,apikey, spreadsheetId) {
        this.baseurl = baseUrl;
        this.apikey = apikey;
        this.spreadsheetId = spreadsheetId;
        this.get = async (url, params) => {
            let version = "&v="+new Date().getMilliseconds()
            let result = await fetch(this.baseurl + url+version, {
                method: 'GET',
            })
            return await result.json()
        }
        this.post = async (url, params) => {
            let result = await fetch(this.baseurl + url, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer "+this.apikey,
                    "X-Spreadsheet-Id": this.spreadsheetId,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
                })
            return result.ok
        }
    }
}