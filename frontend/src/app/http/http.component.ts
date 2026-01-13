import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpComponent {
  response: WritableSignal<any> = signal<any>(null);
  loading: WritableSignal<boolean> = signal(false);
  error: WritableSignal<string | null> = signal<string | null>(null);

  constructor(private httpService: HttpService) {}

  getData(): void {
    this.loading.set(true);
    this.error.set(null);
    this.response.set(null);
    this.httpService.getData().subscribe({
      next: (res) => {
        this.response.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Error occurred');
        this.loading.set(false);
      }
    });
  }

  postData(): void {
    this.loading.set(true);
    this.error.set(null);
    this.response.set(null);
    this.httpService.postData({ foo: 'bar' }).subscribe({
      next: (res) => {
        this.response.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Error occurred');
        this.loading.set(false);
      }
    });
  }
}
