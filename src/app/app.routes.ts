import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProdectsComponent } from './pages/prodects/prodects.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
        { 
           path:'',component: HomeComponent
        },
       { 
          path:'products/:id',component: ProdectsComponent
       },
       { 
          path:'login',component: LoginComponent
       } ,
   //     { 
   //      path:'products',component: ProdectsComponent
   //   } 
];
