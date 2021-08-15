import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './projects/sice/shared/page-not-found/page-not-found.component';
import { StudentsComponent } from './projects/sice/students/students.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
