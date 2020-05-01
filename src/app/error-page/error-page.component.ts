import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Error } from './error.model';
import { ErrorsManagementService } from './errors-management.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, AfterViewInit {

  error: Error;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private errorManagement: ErrorsManagementService) { }

  ngOnInit() {

    this.route.data.subscribe((data: Data) => {
      console.log('data ' + data);
      this.error = data['error'];
      this.errorMessage =  this.error.description;
      console.log('Error ' + this.error);
    });
  }

  ngAfterViewInit() {

    this.errorManagement.resetCurrentError();
  }

}
