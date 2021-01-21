import { ClienteService } from './../../services/cliente.service';
import { PetService } from './../../services/pet.service';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pedido } from 'src/app/model/pedidos';
import { Pet } from 'src/app/model/pet';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-pedidos-novos',
  templateUrl: './pedidos-novos.page.html',
  styleUrls: ['./pedidos-novos.page.scss'],
})
export class PedidosNovosPage implements OnInit {

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
    private ClienteService : ClienteService
    ) {

      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        this.id = response.uid;
        console.log(response.uid)
      this.pedidoService.listaDePedidoPorStatus(response.uid,"novo").subscribe(response => {
       
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
