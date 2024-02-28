import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DialogSpinnerComponent } from './shared/dialog-spinner/dialog-spinner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticleTemplateComponent } from './components/article-template/article-template.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'article-template', component: ArticleTemplateComponent},
  { path: 'about-page', component: AboutPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
