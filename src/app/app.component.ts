import { Component, OnInit } from '@angular/core';
import { interval,  } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularDemo';

  ngOnInit(){
    this.initInterval();
  }

  initInterval(){
    interval(1000).pipe(
      filter((data:number)=>{
        if(data <= 5)
          return true;

        return false;
      }),

      map((data:number)=>{
        return `Count:${data}`;
    })
    ).subscribe((data:string)=>{
      console.log(data)
  });
  }
}
