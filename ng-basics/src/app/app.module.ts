import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router'
// import { NgbModule } from '@ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './chart/chart.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartFillComponent } from './chart-fill/chart-fill.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartsFileComponent } from './charts-file/charts-file.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NoteComponent } from './note/note.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChartComponent,
    ChartBarComponent,
    ChartFillComponent,
    PageNotFoundComponent,
    ChartsFileComponent,
    StartPageComponent,
    CalculatorComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
