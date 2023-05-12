import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { login, loginForm } from 'src/app/Interfaces';
import { AllService } from 'src/app/servicios/all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../general-style.scss' ]
})
export class LoginComponent implements OnInit{


  public formulario!: loginForm;
  constructor(
    private builder: FormBuilder,
    private services: AllService
    ){
    this.formulario = this.builder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }) as loginForm;
  }

  ngOnInit(): void {
     
  }

  login_event(){
    if(this.formulario.valid)
    {
      const username = this.formulario.controls.username.value;
      const password = this.formulario.controls.password.value;

      let loginBody: login = {
        username,
        password
      }

      console.log(loginBody);
 
      this.services.login(loginBody).subscribe((loginRecive) => {

      }, (err: HttpErrorResponse) => {
        let statusCode = err.status;
        switch(statusCode){
          case 400:{
            //bad request
            break;
          }
          case 404:{
            //not found
            break;
          }
          case 500:{
            //Server internal error
            break;
          }
          default:{
            //another status code
            break;
          }
        }
      })
    }else{
      //TODO: alerta
      alert("Ingresa todos los datos.");
    }

  }

}
