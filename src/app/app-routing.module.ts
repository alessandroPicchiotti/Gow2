import { ListArticoliComponent } from './pages/articoli/list-articoli/list-articoli.component';
import { GridArticoliComponent } from './pages/articoli/grid-articoli/grid-articoli.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { RouteguardService } from 'src/Services/routeguard.service';

const routes: Routes = [
  { path:'',component:LoginComponent  },
  { path:'login',component:LoginComponent  },
  { path:'articoli',component:ListArticoliComponent,canActivate:[RouteguardService]},
  { path:'articoli/grid',component:GridArticoliComponent,canActivate:[RouteguardService]},
  { path:'**',component:ErrorComponent  }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
