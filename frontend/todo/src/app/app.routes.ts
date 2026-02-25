import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Error } from './error/error';
import { ListTodos } from './list-todos/list-todos';
import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';

export const routes: Routes = [
  { path: '', component: Login },  
  { path: 'login', component: Login },
  { path: 'welcome', component: Welcome, canActivate: [RouteGuard] }, //routeguard service
  { path: 'welcome/:username', component: Welcome, canActivate: [RouteGuard] },
  { path: 'todos', component: ListTodos, canActivate: [RouteGuard] },
  { path: 'logout', component: Logout, canActivate: [RouteGuard] },
  { path: '**', component: Error },
  
]; 