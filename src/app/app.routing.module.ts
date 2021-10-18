
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { TeachersComponent } from "./teachers/teachers.component";

const appRoutes:Route[] = [
  {path:'', component: HomeComponent},
  {path:'students', component: StudentListComponent},
  {path:'students/:name', component: StudentDetailComponent},
  {path:'teachers', component: TeachersComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
