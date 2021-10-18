import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  @Input()
  studentName:string = ""

  @Output()
  studentSubmitted = new EventEmitter()

  currentDate = new Date()
  firstName = "John"
  lastName = "Smith"
  age = 23;

  message:string = "This is First Component"

  isDisabled = true;
  isYellow = true;
  classes = {'isYellow': this.isYellow}

  color = 'green'
  constructor(private router:Router, private logginService:LoggingService) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

    setTimeout(() => {
      this.isDisabled = false;
      this.isYellow = false;
      this.studentSubmitted.emit()
    }, 3000);
  }

  getMessage(){
    this.message = "Hello"
    this.logginService.logMessage(this.message)
    return this.message;
  }

  onDetail(){
    this.router.navigate(["/students", this.studentName] )
  }
}
