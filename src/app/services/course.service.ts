import { Injectable } from '@angular/core';
import {Course} from "../models/course.model";

@Injectable()
export class CourseService {

  constructor() { }

  index(): Promise<Course[]> {
    return Promise.resolve([
      new Course(1, 'test', 'test', 1200),
      new Course(1, 'test', 'test', 1200),
      new Course(1, 'test', 'test', 1200),
      new Course(1, 'test', 'test', 1200),
    ]);
  }

}
