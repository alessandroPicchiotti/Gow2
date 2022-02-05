
export interface IArticoli {
  codart: string,
  descrizione: string,
  um: string,
  pzcart: number,
  pesoNetto: number,
  pesoLordo: number,
  prezzo: number,
  active: boolean,
  data: Date,
  imageUrl: string,
  tipo:string,

}

export interface IArtico{
  ar_codart:string
  ar_descr:string
  ar_unmis:string
  ar_codtipa:number
  ar_pesolor:number
  ar_pesonet:number
  ar_confez2:string
  codditt: string
  ar_famprod : string
  ar_datins : Date
  ar_codiva:number
  //Iva: ITabciva

}

export interface ITabciva{
  tb_codciva:number,
  tb_desciva:string,
  tb_aliq:number,
  
}
export interface Itabcfam{
  tb_codcfam:string,
  tb_descfam:string
}