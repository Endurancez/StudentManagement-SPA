import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public open(): void {
    this.show = true;
  }

  public close(): void {
    this.show =  false;
  }

}
