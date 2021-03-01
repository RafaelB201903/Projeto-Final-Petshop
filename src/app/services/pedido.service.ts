import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedidos';
import { Observable, from } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()

export class PedidoService {
    pedido: Pedido = new Pedido();

    constructor(private firestore: AngularFirestore,
                private storage : AngularFireStorage) {}


    listaDeInfoPedidos(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idpetshop","==",id)).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }
    //lista dos pedidos novos
    listaDePedidoPorStatus(id,status): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idpetshop","==",id).where("status","==",status)).snapshotChanges().subscribe(response => {
                
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data()); // obj.payload.doc.data() -> Dados do cliente
                    console.log(obj.payload.doc.data())
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    //lista dos pedidos em andamento
    listaDePedidoPorStatusEmAndamento(id,status): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idpetshop","==",id).where("status","==",status)).snapshotChanges().subscribe(response => {
                
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data()); // obj.payload.doc.data() -> Dados do cliente
                    console.log(obj.payload.doc.data())
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }
    

    listaDeInfoCliente(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idcliente","==",id)).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    listaDeInfoPet(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idpetshop","==",id)).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
      
            this.firestore.collection('pedido').doc(id).snapshotChanges().subscribe(response => {
              

                console.log(response);

                let pedido: Pedido = new Pedido();
                pedido.id = response.payload.id;
              

                pedido.setData(response.payload.data());
                observe.next(pedido);

               
            }, (err) => {

                observe.error("Erro ao buscar o ID!");
            })



        }));

    }
   

    //confirmar no caso
    atualizarPedido(id: any,pedido: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('pedido').doc(id).set(pedido).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    
    

}