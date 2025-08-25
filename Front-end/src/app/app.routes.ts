import { Routes } from '@angular/router';
import { Login } from './main/login/login';
import { Register } from './main/register/register';

export const routes: Routes = [

    {path: '', component: Login},
    {path: 'register', component: Register}
];
