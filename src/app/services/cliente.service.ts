import { Cliente } from '../model/cliente';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable()

export class ClienteService {
    cliente: Cliente = new Cliente();

    constructor(private firestore: AngularFirestore) {}


//vai puxar as informações do perfil do petshop especifico //perfil
clientePorId(idcliente): Observable<any> {

      
    return from(new Observable(observe => { 

        this.firestore.collection('perfil-cliente').doc(idcliente).snapshotChanges().subscribe(response => {
            
            let cliente: Cliente = new Cliente();
            cliente.setData(response.payload.data())
            console.log("id" +idcliente);
            console.log(response.payload.data());
            observe.next(cliente);
        })

    }))
}

}