import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  FormGroup: FormGroup;

  constructor(private menuCtrl: MenuController,
               private formBuilder: FormBuilder,
               private auth : AngularFireAuth,
               private template: TemplateService,
   ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.iniciarForm();
  }

  iniciarForm(){
    this.FormGroup =  this.formBuilder.group ( {
      username: [ '' ,  [ Validators . email ] ] ,

    } )
  }

  recuperarSenha() {

    this.template.loading.then(load => {
      load.present();
     
      var email = this.auth
      var emailAddress = this.FormGroup.controls['username'].value;

      email.sendPasswordResetEmail(emailAddress).then(function () {

        load.dismiss();
        this.template.myAlert("Enviado com sucesso!");
      }).catch(function (error) {
        load.dismiss();
        this.template.myAlert("Falha ao enviar! Por favor, tente novamente.");

      });
    })

  }

}
