export class Pedido{
    id: string;
    servico: string;
    pet: string;
    data_sugerido: string;
    horario_sugerido: string;
    idcliente: string;
    idpet: string;
    idpetshop:string;
    horario_coleta : string;
    horario_entrega:string ;

    setData(objFirebase : any){

        this.servico = objFirebase.servico;
        this.pet = objFirebase.pet;
        this.data_sugerido = objFirebase.data_sugerido;
        this.horario_sugerido = objFirebase.horario_sugerido;
        this.idcliente = objFirebase.idcliente;
        this.idpet = objFirebase.idpet;
        this.idpetshop = objFirebase.idpetshop;
        this.horario_coleta = objFirebase.horario_coleta;
        this.horario_entrega = objFirebase.horario_entrega;

    }
}
