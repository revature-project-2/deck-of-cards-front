import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {BlackjackComponent} from './components/blackjack/blackjack.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoadCardDataPipe} from './pipes/load-card-data.pipe';
import {MygamesComponent} from './components/mygames/mygames.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlackjackComponent,
    MygamesComponent,
    MenuComponent,
    LoadCardDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
