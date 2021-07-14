import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const ROUTES: Routes = [
    { path: '', component: UsuariosComponent },
    { path: '**', component: UsuariosComponent },
];

