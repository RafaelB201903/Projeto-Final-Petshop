import { NavController } from '@ionic/angular';
import { TemplateService } from 'src/app/services/template.service';
import { Component, OnInit } from '@angular/core';
import { PetshopService } from '../services/petshop.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Petshop } from '../model/petshop';

@Component({
  selector: 'app-atualizar-info',
  templateUrl: './atualizar-info.page.html',
  styleUrls: ['./atualizar-info.page.scss'],
})
export class AtualizarInfoPage implements OnInit {

  formGroup: FormGroup;
  perfil : Petshop = new Petshop(); // Declarar a classe onde se encontra dados do perfil
  
  constructor(private formBuilder : FormBuilder, 
    private petshopServ : PetshopService,
    private auth : AngularFireAuth,
    private template : TemplateService,
    private navCtrl : NavController) { // AngularFireAuth -> pegar dados do usuario logado
    
      this.iniciarForm(); // obrigatório inicializar o formulário
    
      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        
        console.log(response)


        this.petshopServ.buscaPerfilPorId(response.uid).subscribe(response=>{
          // se houver o perfil, colocar os dados para a variavel perfil
          this.perfil = response; // dados preenchidos
          console.log(response)
          this.iniciarForm(); // atualizar os dados do formulário
        }

        )
      })

  }

  ngOnInit() {
  }

  // vincular dados da variavel perfil
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: [this.perfil.nome],
      cnpj: [this.perfil.cnpj],
      telefone: [this.perfil.telefone],
      complemento: [this.perfil.complemento],
      cep: [this.perfil.cep],
      cidade: [this.perfil.cidade],
      bairro: [this.perfil.bairro],
      endereco: [this.perfil.endereco],
      ncomercio: [this.perfil.ncomercio],
      servico1: [this.perfil.servico1],
      preco1: [this.perfil.preco1],
      servico2: [this.perfil.servico2],
      preco2: [this.perfil.preco2],
      servico3: [this.perfil.servico3],
      preco3: [this.perfil.preco3],

    })
  }

  atualizar(){
    this.template.loading.then(load=>{
      load.present();
    
    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.petshopServ.atualizaPerfil(response.uid,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value)
      
        this.template.myAlert("Alteração feita com sucesso!");
        load.dismiss()
      
      }, erro => {
        this.template.myAlert("Erro ao alterar!");
        load.dismiss()
      })
    })
  })
  }

}
