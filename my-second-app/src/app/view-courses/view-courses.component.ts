import { Component, OnInit } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  // course: String = 'Angular'
  totalEnrolled: number = 0;

  // courses: Array<String> = ['Angular', 'Java', 'Spring', 'Git', 'MongoDB'];

  courses: Array<Course> = [ 
    {title: 'Angular', summary: 'Framework from Google!!'},
    {title: 'Java', summary: 'Basic Programming Language from Oracle'},
    {title: 'Spring', summary: 'Framework making Java Easy'},
    {title: 'Git', summary: 'Source Code Management!!'},
    {title: 'MongoDB', summary: 'NoSQL db'}
  ]

  handleUserEnrolled(i: number){
    console.log('In the parent component', i)
    this.totalEnrolled +=i;
  }

  constructor() { }

  ngOnInit(): void {

    for(let course of this.courses){
      console.log(course)
    }
    
  }

}
