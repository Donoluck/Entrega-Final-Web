import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';

//Componentes
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistoriaComponent } from './historia/historia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './cursos/cursos.component';
import { GaleriaComponent } from './galeria/galeria.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '@app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    HistoriaComponent,
    CursosComponent,
    GaleriaComponent,
    AsignaturasComponent,
    SigninComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RecaptchaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
