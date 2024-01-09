export default class Api {
    constructor(url){
        this.url = url;
    }
    async get(){
        try{
            let response;
            response = await fetch(this.url);
            return await response.json();
        } catch(err){
            throw new Error(err);
        }
    }
};