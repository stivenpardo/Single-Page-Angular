import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Routes
import { APP_ROUTING } from './app.routes'
//Services

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideBarComponent,
    AboutComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
