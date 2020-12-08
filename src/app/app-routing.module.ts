import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CavityBalanceComponent } from './components/mainmenu/cavity-balance/cavity-balance.component';
import { CoolingTimeComponent } from './components/mainmenu/cooling-time/cooling-time.component';
import { CosmeticProcessWindowComponent } from './components/mainmenu/cosmetic-process-window/cosmetic-process-window.component';
import { GateSealComponent } from './components/mainmenu/gate-seal/gate-seal.component';
import { HomeComponent } from './components/mainmenu/home/home.component';
import { PressureDropComponent } from './components/mainmenu/pressure-drop/pressure-drop.component';
import { ViscosityCurveComponent } from './components/mainmenu/viscosity-curve/viscosity-curve.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'viscositycurve', component: ViscosityCurveComponent },
  { path: 'cavitybalance', component: CavityBalanceComponent },
  { path: 'pressuredrop', component: PressureDropComponent },
  { path: 'cosmeticprocesswindow', component: CosmeticProcessWindowComponent },
  { path: 'gateseal', component: GateSealComponent },
  { path: 'coolingtime', component: CoolingTimeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
