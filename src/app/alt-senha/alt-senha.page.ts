import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-alt-senha',
  templateUrl: './alt-senha.page.html',
  styleUrls: ['./alt-senha.page.scss'],
})
export class AltSenhaPage implements OnInit {

  
  emailAddress: any;

  constructor(
    private auth: AngularFireAuth,
    public template : TemplateService
    
  ) { 
    this.auth.currentUser.then(response=>{
      this.emailAddress = response.email;
      
    })
  }


  ngOnInit() {
    
    
  }
  

  recuperarSenha() {

    
     
      var email = this.auth
      console.log(email)
      
      console.log(this.emailAddress)

      email.sendPasswordResetEmail(this.emailAddress).then(function () {

       
        
        
      }).catch(function (error) {
     
      
     

      });
    
    

  }
 

  }

