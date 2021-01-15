import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pedido } from 'src/app/model/pedidos';

@Component({
  selector: 'app-pedidos-novos',
  templateUrl: './pedidos-novos.page.html',
  styleUrls: ['./pedidos-novos.page.scss'],
})
export class PedidosNovosPage implements OnInit {

  lista : Pedido[] = [];
  id : string = "";

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth) {

      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        this.id = response.uid;
        console.log(response.uid)
      this.pedidoService.listaDeInfoPedidos(response.uid).subscribe(response => {
        //this.clienteServ.listaDeClientes() -> chamei a lista de clientes 
        //o ListaDeClientes é um OBSERVABLE dessa forma retorna um subscribe
        //Esse é o comando que irá aguardar a resposta do servidor
  
        //se o servidor responder ele fazer isso aqui
        console.log(response);//isso serve para ver se o problema é aqui, se houver algum erro aparecera aq
        //solicitando uma resposta do servidor
        this.lista = response;
        console.log(this.lista);
  
        
      }, err=> {
        //o lista de cliente retorna observable 
      })
    })


    }

  

  ngOnInit() {
  }
   
  visualizar(pedido){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/ver-mais-pedido-novo',pedido.id])
    console.log(pedido.id)
  }

  visualizar2(pedido){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/confirmar-pedido',pedido.id])
    console.log(pedido.id)
  }

}
