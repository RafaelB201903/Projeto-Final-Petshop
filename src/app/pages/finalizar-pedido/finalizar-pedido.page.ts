import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pedido } from 'src/app/model/pedidos';
import { PedidoService } from 'src/app/services/pedido.service';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.page.html',
  styleUrls: ['./finalizar-pedido.page.scss'],
})
export class FinalizarPedidoPage implements OnInit {

  pedido: Pedido = new Pedido();
  id : string = "";
  idpedido: string ="";
  formGroup: FormGroup;
  status: string = "finalizado";
  

  constructor(private pedidoService : PedidoService,
    private navCtrl : NavController,
    private auth : AngularFireAuth,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private template : TemplateService,

               ){


      this.iniciarForm();//iniciar o formulario para n dar erro


      this.route.paramMap.subscribe(url=>{

       this.id = url.get('id');
        
  
        this.idpedido = this.id;
        console.log(this.idpedido);
      
       
        this.pedidoService.buscaPorId(this.id).subscribe(response => {


        this.pedido.setData(response);
        this.pedido.id = this.id;
        this.iniciarForm();//iniciar o formulário de novo, porém agora com as informações do banco
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })
     
    }

  ngOnInit() {
    
  }

  finalizar(){
    
    this.pedidoService.atualizarPedido(this.pedido.id,this.formGroup.value).subscribe(response=>{
      console.log(response);
      console.log(this.formGroup.value)

      this.template.myAlert("Pedido finalizado com sucesso!");

      this.navCtrl.navigateBack(['/tabs/pedidos-em-andamento'])
   
    },erro => {
      console.log("Erro")

    
      this.template.myAlert("Erro ao finalizar");
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
     
      
      horario_coleta : [this.pedido.horario_coleta],
      horario_entrega: [this.pedido.horario_entrega],
      status:[this.status],
      
      endereco: [this.pedido.endereco],
      nome_cliente: [this.pedido.nome_cliente]
      
     
    })
  }
  
}
