import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  formData: { username: string; email: string; notifications: boolean } | null = null;
  username = '';
  email = '';
  notifications = false;

  ngOnInit(): void {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    if (savedUsername) this.username = savedUsername;
    if (savedEmail) this.email = savedEmail;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.formData = {
        username: this.username,
        email: this.email,
        notifications: this.notifications
      };
      localStorage.setItem('username', this.username);
      localStorage.setItem('email', this.email);
    }
  }
}
