import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName: string;

  constructor(private authService: AuthService) {
    this.userName = this.authService.getUsername() || '';
  }

  ngOnInit(): void {}
}
