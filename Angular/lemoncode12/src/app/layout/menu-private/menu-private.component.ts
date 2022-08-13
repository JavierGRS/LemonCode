import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.css'],
})
export class MenuPrivateComponent implements OnInit {
  username: string = 'usuario';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private appComponent: AppComponent
  ) {
    this.username = this.authService.getUsername();
  }

  ngOnInit(): void {}

  logOut() {
    this.appComponent.setIsLoggedIn(false, '', '');
    this.router.navigate(['/login']);
  }
}
