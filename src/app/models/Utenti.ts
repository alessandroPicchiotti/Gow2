export interface IUtenti {
 
    userid : string,
    Password : string,
    Abilitato : boolean,
    dataUltAccesso: Date,
    RuoliUtente : IRuoliUtenti

}

export interface IRuoliUtenti {
    id_ruolo : number,
    userid: string
}