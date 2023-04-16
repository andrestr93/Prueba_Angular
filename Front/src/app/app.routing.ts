// IMportar los modulos del router de Angular

import {ModuleWithProviders} from '@angular/core';


import {Routes , RouterModule} from '@angular/router';

// importar componentes a los cuales les quiero hacer una página exclusiva

import {HomeComponent} from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';





// array de rutas


const appRoutes :  Routes = [

  {path: '' , component: HomeComponent},

  {path: 'formulario' , component: FormularioComponent},


];

// Exportar el módulo de rutas


export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


