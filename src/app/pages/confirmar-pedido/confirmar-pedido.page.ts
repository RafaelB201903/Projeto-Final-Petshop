import { PedidoService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Pedido } from 'src/app/model/pedidos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';

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
  

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private template : TemplateService) {

      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        
  
        this.idpedido = this.id;
        console.log(this.idpedido);
      
       
        this.pedidoService.buscaPorId(this.id).subscribe(response => {


        this.pedido.setData(response);
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })
      this.iniciarForm();
    }


  ngOnInit() {
  }

  atualizar(){
    this.pedidoService.atualizarPedido(this.formGroup.value).subscribe(response => {
        
      console.log("Atualizado com sucesso");

      ;//janelinha de carregamento
      this.template.myAlert(response);//response lá do service
      //
      //this.navCtrl.navigateBack(['/info-vacinas',this.idpet])
      
    },erro => {
      console.log("Erro")

    
      this.template.myAlert("Erro ao Cadastrar");
    })


  }
  

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      //aqui dentr vou colocar os campos do formulario
      // campos que preciso no cadastro, id gerado de forma automatica
      horario_coleta : [],
      horario_entrega: [],
      status:[this.status],

      
     
    })
  }


}
