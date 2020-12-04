import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sair-petshop',
  templateUrl: './sair-petshop.page.html',
  styleUrls: ['./sair-petshop.page.scss'],
})
export class SairPetshopPage implements OnInit {

  constructor(private navCtrl : NavController,
    private auth: AngularFireAuth,
    private menuCtrl : MenuController) { }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login-petshop']);
    })
  }
}
