import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotTableModule } from '@handsontable/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ViscosityCurveComponent } from './components/viscosity-curve/viscosity-curve.component';
import { CavityBalanceComponent } from './components/cavity-balance/cavity-balance.component';
import { PressureDropComponent } from './components/pressure-drop/pressure-drop.component';
import { CosmeticProcessWindowComponent } from './components/cosmetic-process-window/cosmetic-process-window.component';
import { GateSealComponent } from './components/gate-seal/gate-seal.component';
import { CoolingTimeComponent } from './components/cooling-time/cooling-time.component';
import { HomeComponent } from './components/home/home.component';
import { StudyTitleComponent } from './components/shared/study-title/study-title.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ViscosityCurveComponent,
    CavityBalanceComponent,
    PressureDropComponent,
    CosmeticProcessWindowComponent,
    GateSealComponent,
    CoolingTimeComponent,
    HomeComponent,
    StudyTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }