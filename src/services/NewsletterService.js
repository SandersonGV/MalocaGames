import { BaseSevice } from './BaseSevice'

export class NewsletterService extends BaseSevice {
    constructor() {
        let baseUrl = process.env.VITE_APP_API_URL;
        let spreadsheetId=process.env.VITE_APP_MAILING_SPREADSHEET_ID;
        let apikey = process.env.VITE_APP_API_KEY;
        
        super(baseUrl,apikey,spreadsheetId)
    }
    addEmail = async (email) => {
        let param ={
            email:email,
            nome:"Maloqueir@",
            data: new Date().toLocaleDateString()
        }
        let data = await this.post(`site`,param)
        return data;
    }
  
}