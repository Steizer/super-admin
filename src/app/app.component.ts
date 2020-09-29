import { Component } from '@angular/core';
import { AppConfig } from './app.config';

import { of, from, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, map, reduce } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-admin';

  constructor(
    public config: AppConfig
  ) {
    /*
        of([1, 2, 2, 2, 3])
          .pipe(
            distinctUntilChanged()
          )
          .subscribe(val => console.log(val));
    
    
        from([1, 2, 2, 2, 3])
          .pipe(
            distinctUntilChanged(),
            map(val => val * 10),
            reduce((acc, val) => val + acc)
          )
          .subscribe(val => console.log(val));
    
    */


    // const o1 = new Observable((sub) => {
    //   let count = 0;
    //   setInterval(() => {
    //     console.log(count);

    //     sub.next(count++);
    //   }, 1000);
    // });

    // o1
    //   .pipe(
    //     filter(val => val > 5)
    //   )

  }
}
