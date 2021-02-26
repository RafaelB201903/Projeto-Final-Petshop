import { Component, OnInit } from '@angular/core';
import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'pedidos',
      url: '/tabs/pedidos-novos',
      icon: 'clipboard'
    },
    {
    title: 'perfil',
    url: '/perfil',
    icon: 'person'
    },
    {
    title: 'sair',
    url: '/sair-petshop',
    icon: 'exit'
  },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private push : Push,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.initializeFirebase();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  private initializeFirebase() {
    const options: PushOptions = {
      android: {
        senderID: '657124352584'
      }
    }

    const pushObject: PushObject = this.push.init(options)

    pushObject.on('registration').subscribe(res => console.log(` ${res.registrationId}`))

    pushObject.on('notification').subscribe(res => console.log(`Já chegou o disco voador: ${res.message}`))
  }
}
