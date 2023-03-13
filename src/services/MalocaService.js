import { BaseSevice } from './BaseSevice'

export class MalocaService extends BaseSevice {
    constructor() {
        let baseUrl = `https://malocadb-622a.restdb.io/rest/`;
        let apikey = '6315f2900b7c265b2a0e77e1';
        super(baseUrl,apikey)
    }
    getInfo = async () => {
        let data = await this.get(`infos`)
        return data[0];
    }
    getServices = async () => {
        let data = await this.get(`services`)
        return data;
    }
    getProjects = async () => {
        let data = await this.get(`projects`)
        return data;
    }
    getTeam = async () => {
        let data = await this.get(`team`)
        return data;
    }
  
}