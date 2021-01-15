import { Injectable } from "@angular/core";

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Petshop } from '../model/petshop';

@Injectable()

export class PetshopService {
    petshop: Petshop = new Petshop();

    constructor(private firestore: AngularFirestore) {

    }

    listaDeClientes(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('cliente').snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Petshop[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let petshop: Petshop = new Petshop();
                    petshop.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    petshop.id = obj.payload.doc.id; // inserindo ID
                    lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }


    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('cliente').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Petshop[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let petshop: Petshop = new Petshop();
                        petshop.setData(obj.data());// obj.payload.doc.data() -> Dados do cliente
                        petshop.id = obj.id; // inserindo ID
                        lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    getPerfil(idUser) {
        return from(new Observable(observe => { // converter para Observable

            this.firestore.collection("perfil").doc(idUser).get().subscribe(response => { // .doc seleciona o cliente com base no id

                if (response.exists == false) {

                } else {

                }
            })
        }))
    }



    //

    cadastrar(petshop: any): Observable<any> {
        return from(new Observable(observe => {
            // add cria um novo documento
            this.firestore.collection('cliente').add(petshop).then(response => {
                observe.next("Cadastrado com sucesso!");
            }, (err) => {
                observe.error("Erro ao cadastrar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('cliente').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let petshop: Petshop = new Petshop();
                petshop.id = response.payload.id;
                petshop.setData(response.payload.data());
                observe.next(petshop);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }



    atualizar(petshop: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('cliente').doc(petshop.id).set(petshop).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    excluir(petshop: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('cliente').doc(petshop.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }

    // carregar o perfil do cliente (qualquer coleção)
    buscaPerfilPorId(uid: any): Observable<any> { // uid -> authenticator
        return from(new Observable(observe => {
            this.firestore.collection('perfil-petshop').doc(uid).snapshotChanges().subscribe(response => {
                if (response.payload.exists !== false) {

                    let petshop: Petshop = new Petshop();
                    petshop.id = response.payload.id;
                    petshop.setData(response.payload.data());
                    observe.next(petshop);
                }

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    // Atualiza perfil, 
    atualizaPerfil(uid, dados) {
        return from(new Observable(observe => {

            this.firestore.collection('perfil-petshop').doc(uid).set(dados).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    //vai puxar as informações do perfil do petshop especifico //perfil
    petshopPorId(id): Observable<any> {

      
        return from(new Observable(observe => { 

            this.firestore.collection('perfil-petshop').doc(id).snapshotChanges().subscribe(response => {
                
                let petshop: Petshop = new Petshop();
                petshop.setData(response.payload.data())
                console.log("id" +id);
                console.log(response.payload.data());
                observe.next(petshop);
            })

        }))
    }

   

}