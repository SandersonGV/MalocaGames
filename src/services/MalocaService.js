import { BaseSevice } from './BaseSevice'

export class MalocaService extends BaseSevice {
    constructor() {

        let baseUrl = process.env.VITE_APP_API_URL;
        let spreadsheetId=process.env.VITE_APP_SPREADSHEET_ID;
        let apikey = process.env.VITE_APP_API_KEY;
        super(baseUrl)
        this.query = `?spreadsheetId=${spreadsheetId}&apiKey=${apikey}`
    }
    getInfo = async () => {
        let data = await this.get(`info${this.query}`)
        return data.results[0];
    }
    getProjects = async () => {
        let data = await this.get(`projetos${this.query}`)
        return data.results;
    }
    getTeam = async () => {
        let data = await this.get(`equipe${this.query}`)
        return data.results;
    }
  
}