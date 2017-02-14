import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {userComponent} from './components/user.component';
import {aboutComponent} from './components/about.component';

const appRouters:Routes =[

{
	path:'',
	component:userComponent
},
{
	path:'about',
	component:aboutComponent
}

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRouters);