import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { TemplateService } from '../services/template.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login-petshop',
  templateUrl: './login-petshop.page.html',
  styleUrls: ['./login-petshop.page.scss'],
})
export class LoginPetshopPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private template: TemplateService
  ) {
    this.iniciarForm();
  }
  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  
  autenticar() {
    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;
    this.template.loading.then(load => {
      this.auth.signInWithEmailAndPassword(user, pass).then(data => {
        load.dismiss();
        this.menuCtrl.enable(true);
        this.navCtrl.navigateRoot(['home-petshop']);
      }).catch(data => {
        load.dismiss();
        this.template.myAlert("Erro ao atenticar");
      });
    })
  }


  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.email]],
      password: ['', [Validators.required, 
                      Validators.minLength(13), 
                      Validators.maxLength(16)]]
    })
  }
}

