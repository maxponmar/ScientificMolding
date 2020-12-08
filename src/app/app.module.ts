import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { CavityBalanceComponent } from './components/mainmenu/cavity-balance/cavity-balance.component';
import { ViscosityCurveComponent } from './components/mainmenu/viscosity-curve/viscosity-curve.component';
import { PressureDropComponent } from './components/mainmenu/pressure-drop/pressure-drop.component';
import { CosmeticProcessWindowComponent } from './components/mainmenu/cosmetic-process-window/cosmetic-process-window.component';
import { GateSealComponent } from './components/mainmenu/gate-seal/gate-seal.component';
import { CoolingTimeComponent } from './components/mainmenu/cooling-time/cooling-time.component';
import { HomeComponent } from './components/mainmenu/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainmenuComponent,
    NavbarComponent,
    SidebarComponent,
    CavityBalanceComponent,
    ViscosityCurveComponent,
    PressureDropComponent,
    CosmeticProcessWindowComponent,
    GateSealComponent,
    CoolingTimeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
