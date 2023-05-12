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
        path: "tarjet",
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
