import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/site.model';
import { FirestoreDataService } from 'src/app/services/firestore-data.service';

@Component({
  selector: 'courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  constructor(private firestoreService: FirestoreDataService) { }

  ngOnInit(): void {
    this.firestoreService.getCourses().subscribe((res: Course[]) => {
      console.log(res);
    })
  }

}
