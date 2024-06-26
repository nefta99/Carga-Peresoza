import { CommonModule } from '@angular/common';
import { ContriesRoutingModule } from './countries-routing.module';
import { NgModule } from '@angular/core';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByContryPageComponent,
    ByRegionPageComponent,
    ContryPageComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule
  ]
})
export class CountriesModule { }
