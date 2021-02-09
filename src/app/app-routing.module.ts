import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { DessertsComponent } from './dashboard/desserts/desserts.component';
import { SnacksComponent } from './dashboard/snacks/snacks.component';
import { DrinksComponent } from './dashboard/drinks/drinks.component';
import { RecipieComponent } from './dashboard/recipie/recipie.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',component:PagenotfoundComponent},
  {path:'dashboard',component:LayoutComponent,
  
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'desserts',pathMatch:'full'},
  {path:'desserts',component:DessertsComponent},
  {path:'',redirectTo:'snacks',pathMatch:'full'},
  {path:'snacks',component:SnacksComponent},
  {path:'',redirectTo:'drinks',pathMatch:'full'},
  {path:'drinks',component:DrinksComponent},
  {path:'',redirectTo:'recipies',pathMatch:'full'},
  {path:'recipies',component:RecipieComponent},
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'add',canActivate:[AuthGuard], component:AddComponent},
  {path:'',redirectTo:'update',pathMatch:'full'},
  {path:'update',component:UpdateComponent},
  {path:'',redirectTo:'comment',pathMatch:'full'},
  {path:'comment',component:CommentComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
