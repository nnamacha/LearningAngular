import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  onLoadServers() {

    this.router.navigate(['/servers']);
  }

  onLogon() {

    this.authservice.login();
  }

  onLogoff() {

    this.authservice.logout();
  }
}
