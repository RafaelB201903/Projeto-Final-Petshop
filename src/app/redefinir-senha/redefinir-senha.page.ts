import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
