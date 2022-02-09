import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './site-pages/courses-page/courses-page.component';
import { StudentsPageComponent } from './site-pages/students-page/students-page.component';
import { TeachersPageComponent } from './site-pages/teachers-page/teachers-page.component';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'teachers', component: TeachersPageComponent},
  { path: 'students', component: StudentsPageComponent},
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', component: CoursesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
