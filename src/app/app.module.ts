import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponentsModule } from './angular-material-components.module';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './shared/interceptor/interceptor.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogSpinnerComponent } from './shared/dialog-spinner/dialog-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ArticleTemplateComponent } from './components/article-template/article-template.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    DialogSpinnerComponent,
    FooterComponent,
    CardComponent,
    ArticleTemplateComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialComponentsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
