import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent} from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeBenchBakeryComponent } from './benchbakery/home/home.component';
import { AdminComponent } from './benchbakery/admin/admin.component';
import { LoginComponent } from './benchbakery/login/login.component';
import { ProductsComponent } from './benchbakery/products/products.component';
import { StockComponent } from './benchbakery/stock/stock.component';
import { UpdateComponent } from './benchbakery/update/update.component';
import { PlusvaultComponent } from './plusvault/plusvault.component';
import { BirdbooksComponent } from './birdbooks/birdbooks.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"footer", component:FooterComponent},
  {path:"", component:HomeComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"projects/:id/:title", component:ProjectDetailsComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"benchbakery/home", component:HomeBenchBakeryComponent},
  {path:"benchbakery/admin", component:AdminComponent},
  {path:"benchbakery/login", component:LoginComponent},
  {path:"benchbakery/products", component:ProductsComponent},
  {path:"benchbakery/stock", component:StockComponent},
  {path:"benchbakery/update/:id", component:UpdateComponent},
  {path:"case_studies/plusvault", component:PlusvaultComponent},
  {path:"case_studies/birdbooks", component:BirdbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
