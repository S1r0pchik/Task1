import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartsFileComponent } from './charts-file/charts-file.component'
import { StartPageComponent } from './start-page/start-page.component'
import { CalculatorComponent } from './calculator/calculator.component';
import { NoteComponent } from './note/note.component'


const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'charts', component: ChartsFileComponent},
  {path: 'addition', component: NoteComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
