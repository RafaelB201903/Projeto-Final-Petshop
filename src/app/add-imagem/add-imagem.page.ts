import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ClienteService } from '../services/cliente.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-add-imagem',
  templateUrl: './add-imagem.page.html',
  styleUrls: ['./add-imagem.page.scss'],
})
export class AddImagemPage implements OnInit {

  imagem: any; //armazenada a imagem
  idUser: any = "";
  formGroup: FormGroup;
  addimagem: Cliente = new Cliente();



  constructor(private formBuilder: FormBuilder,
    private clientServ: ClienteService,
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private loadingController: LoadingController,
    public fireStorage: AngularFireStorageModule) {

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
      nome: [this.addimagem.nome],
      cnpj: [this.addimagem.cnpj],
      telefone: [this.addimagem.telefone],
      complemento: [this.addimagem.complemento],
      cep: [this.addimagem.cep],
      cidade: [this.addimagem.cidade],
      bairro: [this.addimagem.bairro],
      endereco: [this.addimagem.endereco],
      ncomercio: [this.addimagem.ncomercio],
      servico1: [this.addimagem.servico1],
      preco1: [this.addimagem.preco1],
      servico2: [this.addimagem.servico2],
      preco2: [this.addimagem.preco2],
      servico3: [this.addimagem.servico3],
      preco3: [this.addimagem.preco3],

    })
  }
  enviarArquivo(event){
    //Capturando a imagem atravás do input type file (html)
    this.imagem = event.srcElement.files[0];
    //Enviar para o Storage
    this.uploadStorage();
    }
    
    uploadStorage(){
      //Enviar ao firebase
      //this.fireStorage.storage.ref().child(`addimagem/${this.idUser}.jpg`).put(this.imagem).then(response=>{
         
        //console.log("imagerm enviada com sucesso");

      //});
      
      
      }

      dowloadImage(){

        //this.fireStorage.storage.ref().child(`addimagem/${this.idUser}.jpg`).getDownloadURL().then(response=>{
         // this.imagem = response;

     }

}
