import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicial-petshop',
  templateUrl: './inicial-petshop.page.html',
  styleUrls: ['./inicial-petshop.page.scss'],
})
export class InicialPetshopPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
