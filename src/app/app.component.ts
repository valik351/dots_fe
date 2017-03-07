import { Component } from '@angular/core';
import {Course} from "./models/course.model";
import {CourseService} from "./services/course.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[];

  public constructor() {
    const service = new CourseService();
    service.index().then((response: Course[]) => {
      this.courses = response;
    });
  }
}
