import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Error } from './error/error';

export const routes: Routes = [
  { path: '', component: Login },  
  { path: 'login', component: Login },
  { path: 'welcome', component: Welcome },
  { path: '**', component: Error },
]; 