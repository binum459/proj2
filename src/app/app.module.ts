import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import{ HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { DessertsComponent } from './dashboard/desserts/desserts.component';
import { SnacksComponent } from './dashboard/snacks/snacks.component';
import { DrinksComponent } from './dashboard/drinks/drinks.component';
import { RecipieComponent } from './dashboard/recipie/recipie.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { CommentComponent } from './comment/comment.component';
import { AuthService } from './auth.service';
import { AllcategoriesService } from './allcategories.service';
import {TokenInterceptorService } from  './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    DashboardComponent,
    HomeComponent,
    LayoutComponent,
    DessertsComponent,
    SnacksComponent,
    DrinksComponent,
    RecipieComponent,
    UpdateComponent,
    AddComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AllcategoriesService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
