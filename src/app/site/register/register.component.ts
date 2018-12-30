import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from '../../core/services/auth/register.service';
import { Eleve } from '../../shared/models/membres/eleve';
import { Parent } from '../../shared/models/membres/parent';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //profileForm:FormGroup;
  sendable: boolean;
  codeEleve:string;
  codeUser:number = 0;
 
  profileForm =this.fb.group({
    id:[''],	
    role:[''],
    code:[''],		
    login:[''],	
    password:[''],
    userRepass:[''],
    email:[''],		
    url:[''],			
    activation_key:[''],	
    token:[''],	
    lastvisit:[''],	
    online:[false],	
    validate:[false],	
    locked:[false],		
    added_by:[-1],
    genre:null,
    civilite:null,
    nom:[''],
    prenom:[''],
    nickname:[''],
    dateNais:[''],
    lieuNais:[''],
    piece:null,
    numPiece:[''],
    fonction:null,
    pays:null,
    ville:null,
    adresse:this.fb.group({
      quartier:[''],
      situation:[''],
      mobile:[''],
      telephone:[''],
    }),
    reseau:this.fb.group({
      facebook:[''],
      twitter:[''],
      linkedin:[''],
      gplus:[''],
    }),
    photo:[''],
    is_valid:0,
    code_eleve:['38745K'],
		niveau:null, 
		ecole: null,
		status:[''],
    
  });
  constructor(
    public fb:FormBuilder,
    public registerService:RegisterService) { 

  }
  ngOnInit() {
   /* for (let i = 0; i < 10; i++) {
      this.codeUser+= Math.round(10); 
    }
    this.codeEleve = this.codeUser+'T';
    alert(this.codeUser+','+this.codeEleve);*/
  }
  onSubmit(){
    if(this.profileForm.value.password===this.profileForm.value.userRepass){
      if(this.profileForm.value.role==1){
       this.registerService.createNewEleve(this.profileForm.value).subscribe((res:any)=>{
        console.log('valeur',this.profileForm.value);
        console.log('Données envoyées avec succes !', res.body);
      });
      }else{
        console.log("salut !")
      }
    }else{
      alert('Les deux mot de passe ne sont pas identique !');
    }
  }
  getDefaultCode(){
    return Math.random()
  }
}
