import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private template: TemplateService,
    private menuCtrl: MenuController
  ) { }


  ngOnInit() {
    this.menuCtrl.enable(false);
    this.iniciarForm();
  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.email]],

    })
  }

  recuperarSenha() {

    
     
      var email = this.auth
      console.log(email)
      var emailAddress = this.formGroup.controls['username'].value;
      console.log(emailAddress)

      email.sendPasswordResetEmail(emailAddress).then(function () {

        
        console.log("Enviado com sucesso!");
      }).catch(function (error) {
     
        console.log("Falha ao enviar! Por favor, tente novamente.");

      });
    


  }

  

}
