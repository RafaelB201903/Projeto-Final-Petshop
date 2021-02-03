import { PetshopService } from './../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../model/petshop';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  petshop: Petshop = new Petshop();
  id : string = "";
  idcliente: string ="";

  lista : Petshop[] = [];
  

  constructor(private PetshopService : PetshopService,
              private navCtrl : NavController,
              private auth : AngularFireAuth,
            
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  
                  
                
                this.PetshopService.petshopPorId(this.id).subscribe(response => {

          
                  this.petshop.setData(response);
                  console.log(response);

                  
              
                    
                  }, err=> {
                  //o lista de cliente retorna observable 
                  })
                })

               
               
    }



  ngOnInit() {
    
   
  }

  }