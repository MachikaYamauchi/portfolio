import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

import { HomeBenchBakeryComponent } from './benchbakery/home/home.component';
import { AboutBenchBakeryComponent } from './benchbakery/about/about.component';
import { AdminComponent } from './benchbakery/admin/admin.component';
import { LoginComponent } from './benchbakery/login/login.component';
import { ProductsComponent } from './benchbakery/products/products.component';
import { StockComponent } from './benchbakery/stock/stock.component';
import { UpdateComponent } from './benchbakery/update/update.component';
import { PlusvaultComponent } from './plusvault/plusvault.component';
import { BirdbooksComponent } from './birdbooks/birdbooks.component';
import { ProductDetailsComponent } from './benchbakery/product-details/product-details.component';
import {HeaderBenchBakeryComponent} from './benchbakery/header/header.component';
import {FooterBenchBakeryComponent} from './benchbakery/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    AboutComponent,
    ContactComponent,
    HomeBenchBakeryComponent,
    AboutBenchBakeryComponent,
    AdminComponent,
    LoginComponent,
    ProductsComponent,
    StockComponent,
    UpdateComponent,
    PlusvaultComponent,
    BirdbooksComponent,
    ProductDetailsComponent,
    HeaderBenchBakeryComponent,
    FooterBenchBakeryComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
