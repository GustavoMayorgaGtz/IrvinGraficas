import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children:[
      {
        path:"login",
        loadChildren: () => import("./login/login.module").then((m => m.LoginModule))
      },
      {
        path:"home",
        loadChildren: () => import("./inicio/inicio.module").then(m => m.InicioModule)
      }
      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
