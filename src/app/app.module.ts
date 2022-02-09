import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './site-components/sidebar/sidebar.component';
import { CoursesPageComponent } from './site-pages/courses-page/courses-page.component';
import { StudentsPageComponent } from './site-pages/students-page/students-page.component';
import { TeachersPageComponent } from './site-pages/teachers-page/teachers-page.component';
import { DataTableComponent } from './site-components/data-table/data-table.component';
import { AddCourseComponent } from './site-pages/courses-page/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CoursesPageComponent,
    StudentsPageComponent,
    TeachersPageComponent,
    DataTableComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
