import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-preview',
  templateUrl: 'course-preview.component.html',
  styleUrls: ['course-preview.component.css']
})
export class CoursePreviewComponent implements OnInit {

  @Input() course: Course;

  constructor() {
  }

  ngOnInit() {
  }

}
