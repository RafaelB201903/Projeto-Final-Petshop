import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-petshop',
  templateUrl: './home-petshop.page.html',
  styleUrls: ['./home-petshop.page.scss'],
})
export class HomePetshopPage implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goPage() {
    this.router.navigate(['/pedidos-novos'])
  }

}
