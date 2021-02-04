import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Cliente } from 'src/app/model/cliente';
import { Pedido } from 'src/app/model/pedidos';
import { Pet } from 'src/app/model/pet';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pedidos-finalizados',
  templateUrl: './pedidos-finalizados.page.html',
  styleUrls: ['./pedidos-finalizados.page.scss'],
})
export class PedidosFinalizadosPage implements OnInit {

  lista : Pedido[] = [];
  id : string = "";

  pet: Pet = new Pet();
  cliente: Cliente = new Cliente();
  idpedido: string = "";
  pedido : Pedido = new Pedido();
  idcliente: string ="";
  id2: string = "";
  idpet: string = "";
  id3: string = "";

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private PetService : PetService,
    private ClienteService : ClienteService) { 

      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        this.id = response.uid;
        console.log(response.uid)
      this.pedidoService.listaDePedidoPorStatus(response.uid,"finalizados").subscribe(response => {
       
        console.log(response);
        
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
