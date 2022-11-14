import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http'
import { Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"product/:id",component:ProductDetailsComponent},
  {path:"faqs",component:FAQsComponent},
  {path:"quote",component:QuotationComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    FAQsComponent,
    ContactUsComponent,
    AboutUsComponent,
    QuotationComponent,
  
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
