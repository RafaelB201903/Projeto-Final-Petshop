import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-atualizar-info',
  templateUrl: './atualizar-info.page.html',
  styleUrls: ['./atualizar-info.page.scss'],
})
export class AtualizarInfoPage implements OnInit {

  formGroup: FormGroup;
  perfil : Cliente = new Cliente(); // Declarar a classe onde se encontra dados do perfil
  
  constructor(private formBuilder : FormBuilder, 
    private clienteServ : ClienteService,
    private auth : AngularFireAuth) { // AngularFireAuth -> pegar dados do usuario logado
    
      this.iniciarForm(); // obrigatório inicializar o formulário
    
      this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        
        console.log(response)


        this.clienteServ.buscaPerfilPorId(response.uid).subscribe(response=>{
          // se houver o perfil, colocar os dados para a variavel perfil
          this.perfil = response; // dados preenchidos
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
      cpf: [this.perfil.cpf],
      telefone: [this.perfil.telefone],
      complemento: [this.perfil.complemento],
      cep: [this.perfil.cep],
      cidade: [this.perfil.cidade],
      bairro: [this.perfil.bairro],
      endereco: [this.perfil.endereco],
      ncasa: [this.perfil.ncasa],
      servico1: [this.perfil.servico1],
      servico2: [this.perfil.servico2],
      servico3: [this.perfil.servico3]

    })
  }

  atualizar(){
    
    this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario
      // envio uid -> idUsuário
      // this.formGroup.value -> Dados preenchidos nos campos
      this.clienteServ.atualizaPerfil(response.uid,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value)
      })
    })
  }

}
