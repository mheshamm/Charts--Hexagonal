import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgLineComponent } from './components/svg-line/svg-line.component';

import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SvgLineComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
