import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './register/register';
import { Admin } from './admin/admin';


export const routes: Routes = [
  { path: "admin", component: Admin},
  { path: "register", component: Register},
  { path: "dashboard", component: Dashboard },
  { path: "login", component: Login },
  { path: "", redirectTo: "login", pathMatch: "full" }
]
