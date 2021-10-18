import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = ["John", "Yara", "Martin"];

  getStudents(){
    return this.students;
  }

  addStudent(name: string){
    this.students.push(name);
  }
}
