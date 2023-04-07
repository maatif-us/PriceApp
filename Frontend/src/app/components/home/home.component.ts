import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  message: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:8000/api/user', {
        withCredentials: true,
      })
      .subscribe({
        next: (res: any) => {
          this.message = `Hi ${res.name}`;
          Emitters.authEmitter.emit(true);
        },
        error: (err) => {
          this.message = `Please Login to continue`;
          Emitters.authEmitter.emit(false);
        },
      });
  }
}
