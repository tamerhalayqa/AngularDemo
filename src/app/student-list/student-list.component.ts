import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  message:string = "This is First Component"
  students: string[];
  constructor(private loggingService:LoggingService, private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();

  }
  onSubmit(el : HTMLInputElement){
    this.loggingService.logMessage(el.value)
    this.studentService.addStudent(el.value)
  }

  submitted(){
    console.log("Student Submitted")
  }
}
