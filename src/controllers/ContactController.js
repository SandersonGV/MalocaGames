// import { dataStorage } from '../helpers/DataStorage'
import { ContactService } from '../services/ContactService'

export class ContactController {
    constructor() {
        this.contactService = new ContactService();
    }
    sendMessage(nome,email,assunto,mensagem){
        let response = this.contactService.sendMessage(nome,email,assunto,mensagem)
        return response;
    }
    

}