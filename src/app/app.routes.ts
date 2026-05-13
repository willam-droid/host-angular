import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './register/register';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Dashboard3 } from './dashboard3/dashboard3';
import { Mahasiswa } from './mahasiswa/mahasiswa';


export const routes: Routes = [
  { path: "admin", component: Admin},
  { path: "register", component: Register},
  { path: "dashboard", component: Dashboard },
  { path: "dashboard2", component: Dashboard2},
  { path: "dashboard3", component: Dashboard3},
  { path: "login", component: Login },
  { path: "mahasiswa", component: Mahasiswa},
  { path: "", redirectTo: "login", pathMatch: "full" }
]
