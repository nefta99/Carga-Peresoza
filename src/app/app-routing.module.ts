import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPagesComponent } from './shared/pages/contac-pages/contac-pages.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes =[
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContacPagesComponent
  },
  {
    path:'countries',
    loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path : '**',
    redirectTo: ''
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
