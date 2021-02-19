import { PetshopService } from './../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../model/petshop';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';

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

  lista : Petshop[] = [];
  

  constructor(private PetshopService : PetshopService,
              private navCtrl : NavController,
              private auth : AngularFireAuth,
              public storage: AngularFireStorage,
              
            
              ) { 
                this.auth.currentUser.then(response=>{
                  this.id=response.uid;
                  
                  
                
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

    this.storage.storage.ref().child(`addimagem/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.petshop.imagem = response;
    }).catch(response=>{
      this.storage.storage.ref().child(`addimagem/perfil2.jpg`).getDownloadURL().then(response=>{
        this.petshop.imagem = response;
      })
    })

 }



  }