import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MainComponent } from './core/components/main/main.component';

import { FirstSslMainModule } from './modules/first-ssl-main/first-ssl-main.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    //HttpModule,

    // components
    FirstSslMainModule,

    // this module must be last
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
