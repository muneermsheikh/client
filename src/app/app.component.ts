import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient){}

  title = 'client';
  users: any;

  ngOnInit(): void {
    this.http.get('"https://localhost:5001/api/users').subscribe({
      next: response => this.users.response ,
      error: error => console.log(error),
      complete: () => console.log('request completed')
    })
  }
}
