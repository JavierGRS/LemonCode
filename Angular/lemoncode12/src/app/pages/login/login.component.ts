import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserAuth } from 'src/app/model/UserAuth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserAuth;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private appComponent: AppComponent
  ) {
    this.user = {
      username: '',
      password: '',
    };
    // // En forma de observable
    // this.route.queryParams.subscribe(
    //   (queryParams) => (this.loginType = queryParams['type'])
    // );

    // // Como snapshot
    // this.loginType = this.route.snapshot.queryParams['type'];
  }

  ngOnInit(): void {}

  onLoginSuccess() {
    if (this.authService.login(this.user.username, this.user.password)) {
      this.router.navigate(['/dashboard']);
      this.appComponent.isLoggedIn = true;
    }
  }
}
