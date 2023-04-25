import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from "../components/header/header.component";
import { HomeComponent } from "../components/home/home.component";


const routes: Routes = [
    { path: "header", component: HeaderComponent },
    { path: "home", component: HomeComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }