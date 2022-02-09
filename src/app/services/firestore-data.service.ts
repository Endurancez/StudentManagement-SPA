import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../models/site.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataService {

  constructor(private firestore: Firestore) {
  }

  getCourses(): Observable<Course[]> {
    const coursesRef = collection(this.firestore, 'courses');
    return collectionData(coursesRef, { idField: 'id' }) as Observable<Course[]>;
  }

  addSCourse(course: Course) {
    const coursesRef = collection(this.firestore, 'courses');
    return addDoc(coursesRef, course);
  }

}
