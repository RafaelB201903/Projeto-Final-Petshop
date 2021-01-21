export class Pet{
    id: string;
    nomedopet: string;
    raca: string;
    especie: string;
    cor: string;
    sexo: string;
    datadenasc: string;
    tutor: string;
    endereco: string;
    cidade: string;
    estado: string;
    telefone: string;
    celular: string;

    setData(objFirebase : any){

        this.nomedopet = objFirebase.nomedopet;
        this.raca = objFirebase.raca;
        this.especie = objFirebase.especie;
        this.cor = objFirebase.cor;
        this.sexo = objFirebase.sexo;
        this.datadenasc = objFirebase.datadenasc;
        this.tutor = objFirebase.tutor;
        this.endereco = objFirebase.endereco;
        this.cidade = objFirebase.cidade;
        this.estado = objFirebase.estado;  
        this.telefone = objFirebase.telefone;
        this.celular = objFirebase.celular;

    }











}