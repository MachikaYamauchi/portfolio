import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AdminComponent } from './benchbakery/admin/admin.component';
import { LoginComponent } from './benchbakery/login/login.component';
import { ProductsComponent } from './benchbakery/products/products.component';
import { StockComponent } from './benchbakery/stock/stock.component';
import { UpdateComponent } from './benchbakery/update/update.component';


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
    AdminComponent,
    LoginComponent,
    ProductsComponent,
    StockComponent,
    UpdateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
