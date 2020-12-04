import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-petshop',
  templateUrl: './home-petshop.page.html',
  styleUrls: ['./home-petshop.page.scss'],
})
export class HomePetshopPage implements OnInit {

  constructor(private router :Router,
    private menuCtrl : MenuController,
    private navCtrl : NavController,
    private auth: AngularFireAuth) 
    { }

  ngOnInit() {
  }

  goPage() {
    this.router.navigate(['/pedidos-novos'])
  }

  logout(){
    this.auth.signOut().then(data=>{
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login-petshop']);
    })
  }

}
