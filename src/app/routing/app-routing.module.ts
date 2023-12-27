import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MamicitaaaComponent } from '../support/mamicitaaa/mamicitaaa.component';

import { MainComponent } from '../pages/main/main.component';
import { EiiiComponent } from '../support/eiii/eiii.component';
import { HoggyComponent } from '../support/hoggy/hoggy.component';


const routes: Routes = [
    { path: "mamicitaaa", component: MamicitaaaComponent },

    { path: "main", component: MainComponent },
    { path: "eiii", component: EiiiComponent },
    { path: "mahogany", component: HoggyComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }

export const routingComponents = [
    MamicitaaaComponent,

    MainComponent,
    EiiiComponent,
    HoggyComponent,
]