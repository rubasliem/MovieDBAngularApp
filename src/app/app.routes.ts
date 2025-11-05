import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { NotFound } from './components/not-found/not-found';
import { About } from './components/about/about';
import { Movies } from './components/movies/movies';
import { Tv } from './components/tv/tv';
import { People } from './components/people/people';
import { Register } from './components/register/register';
import { Logout } from './components/logout/logout';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'movies',component:Movies},
    {path:'tv',component:Tv},
    {path:'people',component:People},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'logout',component:Logout},
    {path:'**',component:NotFound}
];
