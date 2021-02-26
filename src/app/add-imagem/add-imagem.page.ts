import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-imagem',
  templateUrl: './add-imagem.page.html',
  styleUrls: ['./add-imagem.page.scss'],
})
export class AddImagemPage implements OnInit {

  
  idUser: any = "";
  formGroup: FormGroup;
  cliente: Cliente = new Cliente();



  constructor(private formBuilder: FormBuilder,
    private clientServ: ClienteService,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private loadingController: LoadingController,
    public storage: AngularFireStorage) {

      this.iniciarForm();
      this.auth.authState.subscribe(response=>{
        this.idUser = response.uid;
        this.dowloadImage();
      }
        )
  
}

     

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({

      nome: [this.cliente.nome],
     
      telefone: [this.cliente.telefone],
      complemento: [this.cliente.complemento],
      cep: [this.cliente.cep],
      cidade: [this.cliente.cidade],
      bairro: [this.cliente.bairro],
      endereco: [this.cliente.endereco],

      

    })
  }
  enviarArquivo(event){
    //Capturando a imagem atravás do input type file (html)
    let img = event.srcElement.files[0];
    //Enviar para o Storage

    this.storage.storage.ref().child(`perfil_petshop/${this.idUser}.jpg`).put(img).then(response=>{
         
        this.dowloadImage();

      });
    }
    
    

      dowloadImage(){

        this.storage.storage.ref().child(`perfil_petshop/${this.idUser}.jpg`).getDownloadURL().then(response=>{
          this.cliente.imagem = response;
        }).catch(response=>{
          this.storage.storage.ref().child(`perfil_petshop/petshop_perfil.jpg`).getDownloadURL().then(response=>{
            this.cliente.imagem = response;
          })
        })


     
    }

    

}
