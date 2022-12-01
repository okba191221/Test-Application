import { NotFoundComponent } from './not-found/not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfilFormComponent } from './profil-form/profil-form.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'list',component: ListProductComponent},
  {path:'new', component: ProductFormComponent},
  {path:'update/:id', component: ProductFormComponent},
  {path:'me/:id', component: MyProfileComponent},
  {path:'profils', component: ProfilFormComponent},
  {path:'edit/:id', component: ProfilFormComponent},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
