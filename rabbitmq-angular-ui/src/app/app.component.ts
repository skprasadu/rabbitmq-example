import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rabbitmq-angular-ui';

  constructor(public http: HttpClient) {
  }

  myFunc(){
    console.log("function called");

    this.http.get<any[]>('http://localhost:8080/hello')
      .subscribe(data => {
        console.log("get data")
      },
      error => {
      }
    );
  }
}
