import { BaseSevice } from './BaseSevice'

export class ContactService extends BaseSevice {
    constructor() {
        let baseUrl = process.env.VITE_APP_API_URL;
        let spreadsheetId=process.env.VITE_APP_CONTACT_SPREADSHEET_ID;
        let apikey = process.env.VITE_APP_API_KEY;
        
        super(baseUrl,apikey,spreadsheetId)
    }
    sendMessage = async (nome,email,assunto,mensagem) => {
        let param ={
            nome:nome,
            email:email,
            assunto:assunto,
            mensagem:mensagem,
            data: new Date().toLocaleDateString()
        }
        let data = await this.post(`site`,param)
        return data;
    }
  
}