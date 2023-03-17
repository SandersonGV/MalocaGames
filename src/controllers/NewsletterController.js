// import { dataStorage } from '../helpers/DataStorage'
import { NewsletterService } from '../services/NewsletterService'

export class NewsletterController {
    constructor() {
        this.newsletterService = new NewsletterService();
    }
    addEmail(email){
        this.info = this.newsletterService.addEmail(email)
        return this.info;
    }
    

}