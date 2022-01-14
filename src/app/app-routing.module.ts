import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './errors/error/error.component';

const routes: Routes = [
  { path:'',component:LoginComponent  },
  { path:'login',component:LoginComponent  },
  { path:'**',component:ErrorComponent  }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
