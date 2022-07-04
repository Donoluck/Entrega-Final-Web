import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder,UntypedFormGroup,Validators,NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  activarMsg:boolean=false;
  formulario:UntypedFormGroup;
  captcha: string;
  
  constructor(public FormB:UntypedFormBuilder) {
    this.formulario=this.FormB.group({
      nombre: ["", [Validators.required,Validators.maxLength(25)]],
      asunto: ["",[Validators.required,Validators.maxLength(20)]],
      comentarios: ["",Validators.required]
    })
    this.captcha = '';
  }
  ngOnInit(): void {
  }
  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }
  validacion(){
    console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;
  }

}
