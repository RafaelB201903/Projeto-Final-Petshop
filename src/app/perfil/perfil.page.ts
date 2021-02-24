import { PedidoService } from './../services/pedido.service';
import { PetshopService } from './../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../model/petshop';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pedido } from '../model/pedidos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  petshop: Petshop = new Petshop();
  id : string = "";
  idcliente: string ="";
  idUser: any = "";

  lista : Pedido[] = [];
  lista1 : Pedido[] = [];

  constructor(private PetshopService : PetshopService,
              private navCtrl : NavController,
              private auth : AngularFireAuth,
              public storage: AngularFireStorage,
              private pedidoService: PedidoService
              
            
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  this.idUser = response.uid;

                  //numero de pedidos novos
                  this.pedidoService.listaDePedidoPorStatusEmAndamento(response.uid,"novo").subscribe(response => {
       
                    console.log(response);
                    
                    this.lista1 = response;
                    
                    
                    
                  }, err=> {
                    //o lista de cliente retorna observable 
                  })

                  //numero de pedidos finalizados
                  this.pedidoService.listaDePedidoPorStatusEmAndamento(response.uid,"finalizado").subscribe(response => {
       
                    console.log(response);
                    
                    this.lista = response;
                    
                    
                    
                  }, err=> {
                    //o lista de cliente retorna observable 
                  })
                  
                
                this.PetshopService.petshopPorId(this.id).subscribe(response => {

          
                  this.petshop.setData(response);
                  console.log(response);
                  this.dowloadImage();
                  
              
                    
                  }, err=> {
                  //o lista de cliente retorna observable 
                  })
                })

               
               
    }



  ngOnInit() {
  }


  dowloadImage(){

    this.storage.storage.ref().child(`perfil_petshop/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.petshop.imagem = response;
      console.log("puxou do banco")
    }).catch(response=>{
      this.storage.storage.ref().child(`perfil_petshop/petshop_perfil.jpg`).getDownloadURL().then(response=>{
        this.petshop.imagem = response;
        console.log("n puxou do banco")
      })
    })

 }



  }