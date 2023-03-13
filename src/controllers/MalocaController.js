// import { dataStorage } from '../helpers/DataStorage'
import { MalocaService } from '../services/MalocaService'

export class MalocaController {
    constructor() {
        this.malocaService = new MalocaService();
    }
    getInfo(){
        this.info = this.malocaService.getInfo()
        return this.info;
    }
    getServices(){
        this.services = this.malocaService.getServices()
        return this.services;
    }
    getProjects(){
        this.projects = this.malocaService.getProjects()
        return this.projects;
    }
    getTeam(){
        this.team = this.malocaService.getTeam()
        return this.team;
    }
    

}