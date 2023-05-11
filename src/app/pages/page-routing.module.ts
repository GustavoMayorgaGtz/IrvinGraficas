import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children:[
      {
        path:"login",
        loadChildren: () => import("./login/login.module").then((m => m.LoginModule))
    },{
      path:"tarjet",
        loadChildren: () => import("./tarjet/tarjet.module").then((m => m.TarjetModule))
    }
      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
