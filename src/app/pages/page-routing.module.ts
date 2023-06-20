import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("./login/login.module").then((m => m.LoginModule))
    },
      {
        path: "home",
        loadChildren: () => import("./inicio/inicio.module").then(m => m.InicioModule)
      },
      {
        path: "datos",
        loadChildren: () => import("./datos/datos.module").then(m => m.DatosModule)
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
