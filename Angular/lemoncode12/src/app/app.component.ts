import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuth } from './model/UserAuth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lemoncode12';
  isLoggedIn: boolean = false;
  currentUser: UserAuth;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = {
      username: '',
      password: '',
    };
  }

  public setIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getUsername(): string {
    return this.authService.getUsername();
  }

  // myEventListener() {
  //   console.log('myeventListener');
  // }

  // myEvent2Listener() {
  //   console.log('myevent2Listener');
  // }
}
