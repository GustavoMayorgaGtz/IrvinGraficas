import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        loadChildren: () => import("./login/login.module").then((m => m.LoginModule))
    },
      {
        path: "home",
        loadChildren: () => import("./inicio/inicio.module").then(m => m.InicioModule)
      },
      {
        path: "selladora",
        loadChildren: () => import("./selladora/selladora.module").then(m => m.SelladoraModule)
      },
      {
        path: "merma",
        loadChildren: () => import("./merma/merma.module").then(m => m.MermaModule)
      },
      {
        path: "pantalla",
        loadChildren: () => import("./tarjetpantalla/tarjetpantalla.module").then(m => m.TarjetpantallaModule)
      }
      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
