import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {}

  logOut() {
    this.appComponent.setIsLoggedIn(false, '', '');
  }
}
