import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { Home2Component } from './components/home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import { SocialsComponent } from './components/socials/socials.component';
import { StatsComponent } from './components/stats/stats.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { HomiesComponent } from './components/homies/homies.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';











@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
    HeaderComponent,
    HomeComponent,
    Home2Component,
    AboutComponent,
    SocialsComponent,
    StatsComponent,
    BottomComponent,
    HomiesComponent,
    WishlistComponent,
  
  ],

  exports: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
