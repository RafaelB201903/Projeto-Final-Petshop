import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Pedido } from 'src/app/model/pedidos';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  lista : Pedido[] = [];
  id : string = "";
  lista1 : Pedido[] = [];

  constructor(private pedidoService : PedidoService,
    private auth : AngularFireAuth,) {
    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
      this.id = response.uid;
      console.log(response.uid)
    this.pedidoService.listaDePedidoPorStatus(response.uid,"novo").subscribe(response => {
     
      console.log(response);
      
      this.lista = response;
      
      
      
    }, err=> {
      //o lista de cliente retorna observable 
    })
  })

  this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
    this.id = response.uid;
    console.log(response.uid)
  this.pedidoService.listaDePedidoPorStatus(response.uid,"andamento").subscribe(response => {
   
    console.log(response);
    
    this.lista1 = response;
    
    
    
  }, err=> {
    //o lista de cliente retorna observable 
  })
})
   }

  ngOnInit() {
  }

}
