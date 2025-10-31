// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Angular 20 + Spring API</h1>
    <button (click)="get()">GET</button>
    <button (click)="post()">POST</button>
    <button (click)="put()">PUT</button>
    <button (click)="patch()">PATCH</button>
    <button (click)="delete()">DELETE</button>

    <p><strong>Respuesta:</strong> {{ response }}</p>
  `
})
export class AppComponent {
  response = '';
  private readonly apiUrl = 'http://localhost:8080/api/endpoint';

  constructor(private http: HttpClient) {}

  get() {
    this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(res => this.response = res);
  }

  post() {
    this.http.post(this.apiUrl, null, { responseType: 'text' }).subscribe(res => this.response = res);
  }

  put() {
    this.http.put(this.apiUrl, null, { responseType: 'text' }).subscribe(res => this.response = res);
  }

  patch() {
    this.http.patch(this.apiUrl, null, { responseType: 'text' }).subscribe(res => this.response = res);
  }

  delete() {
    this.http.delete(this.apiUrl, { responseType: 'text' }).subscribe(res => this.response = res);
  }
}
