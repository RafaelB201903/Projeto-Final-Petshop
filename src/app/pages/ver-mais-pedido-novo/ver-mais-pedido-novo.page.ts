import { PetService } from './../../services/pet.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/model/pedidos';
import { Cliente } from 'src/app/model/cliente';
import { Pet } from 'src/app/model/pet';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-ver-mais-pedido-novo',
  templateUrl: './ver-mais-pedido-novo.page.html',
  styleUrls: ['./ver-mais-pedido-novo.page.scss'],
})
export class VerMaisPedidoNovoPage implements OnInit {

  pet: Pet = new Pet();
  cliente: Cliente = new Cliente();
  idpedido: string = "";
  pedido : Pedido = new Pedido();
  idcliente: string ="";
  id2: string = "";
  idpet: string = "";
  id3: string = "";
  idUser: any = "";

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private route: ActivatedRoute,
    private clienteService : ClienteService,
    private PetService : PetService,
    public storage: AngularFireStorage,
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');

      this.idpedido= id;
      console.log(id)
      console.log(this.idpedido)

      //listar as informações do pedido
      this.pedidoService.buscaPorId(id).subscribe(response=>{
       
       

        this.id2 = response.idcliente;
        
        console.log(this.id2);

        this.id3 = response.pet;
        console.log(this.id3 + " PET ID");
        
        this.pedido.setData(response);//envia os dados para o html
     
        //listar as informações do pet
        this.PetService.buscaPetPorId(this.id3).subscribe(response=>{
          
          
          this.idUser = this.id3;
          this.dowloadImage();

          this.pet.setData(response);
        })

      //listar as informações do cliente
      this.clienteService.clientePorId(this.id2).subscribe(response=>{
        this.idcliente = response;
        console.log(this.idcliente);

        this.cliente.setData(response);//envia os dados para o html

      }, err=> {
       
      })
    })
  })


  
  }


  visualizar(idpedido){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/confirmar-pedido',this.idpedido])
    console.log(idpedido)
  }


  dowloadImage(){
    console.log(this.idUser)
    this.storage.storage.ref().child(`pet/${this.idUser}.jpg`).getDownloadURL().then(response=>{
      this.pet.imagem = response;
     
     
    }).catch(response=>{
      this.storage.storage.ref().child(`pet/dog.png`).getDownloadURL().then(response=>{
        this.pet.imagem = response;
       
      })
    })

 }
}
