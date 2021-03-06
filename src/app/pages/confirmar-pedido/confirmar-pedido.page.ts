import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pedido } from 'src/app/model/pedidos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Pet } from 'src/app/model/pet';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.page.html',
  styleUrls: ['./confirmar-pedido.page.scss'],
})
export class ConfirmarPedidoPage implements OnInit {

  pedido: Pedido = new Pedido();
  id : string = "";
  idpedido: string ="";
  formGroup: FormGroup;
  status: string = "andamento";
  idUser: string = "";
  pet: Pet = new Pet();
  

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private template : TemplateService,
    public storage: AngularFireStorage,

               ){


      this.iniciarForm();//iniciar o formulario para n dar erro


      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        
  
        this.idpedido = this.id;
        console.log(this.idpedido);
      
       
        this.pedidoService.buscaPorId(this.id).subscribe(response => {

          
        this.idUser = response.pet;
        this.pedido.setData(response);
        this.pedido.id = this.id;
        this.dowloadImage();
        this.iniciarForm();//iniciar o formulário de novo, porém agora com as informações do banco
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })
     
    }


  ngOnInit() {
  }

 

  atualizar(){
    
      this.pedidoService.atualizarPedido(this.pedido.id,this.formGroup.value).subscribe(response=>{
        console.log(response);
        console.log(this.formGroup.value)

        this.template.myAlert("Pedido confirmado com sucesso!");

        this.navCtrl.navigateBack(['/tabs/pedidos-novos'])

      },erro => {
        console.log("Erro")

      
        this.template.myAlert("Erro ao Cadastrar");
      })
      
   
  }
  

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
     
      idcliente: [this.pedido.idcliente],
      idpetshop: [this.pedido.idpetshop],
      servico:[this.pedido.servico],
      pet:[this.pedido.pet],
      data_sugerido:[this.pedido.data_sugerido],
      horario_sugerido:[this.pedido.horario_sugerido],
     
      
      horario_coleta : [],
      horario_entrega: [],
      status:[this.status],
      
      endereco: [this.pedido.endereco],
      nome_cliente: [this.pedido.nome_cliente]
      
     
    })
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
