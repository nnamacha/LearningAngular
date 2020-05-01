import { Injectable } from '@angular/core';
import { Error} from './error.model';
@Injectable({
  providedIn: 'root'
})
export class ErrorsManagementService {

  private errorCodes = [

    // ID 0 -10 for user Authentication
    {
      id: 0,
      description: 'Completed Successfully'
    },
    {
      id: 1,
      description : 'User Not Logged In'
    },

    {
      id: 2,
      description: 'Unknown User'
    },

    {
      id: 3,
      description: 'User Doesn\'t have the necessary permissions'
    },

    // 10 - 20 client-side errors

    {
      id: 10,
      description: 'Page Not Found!'
    },

    // >20 Server-Side Errors

    {
      id: 99,
      description: 'WTF Just happened.!!!!'
    },
    {
      id: 100,
      description: 'Currently processing Something'
    }
  ];

  currentError: Error;
  constructor() {

    this.resetCurrentError();
  }

  getErrors() {

    return this.errorCodes;
  }

  getErrorDescription(id: number) {

    const error = this.errorCodes.find(
        (e) => {
          return e.id === id;
        }
      );
      return error.description;

  }

  getError(id: number) {

    const error = this.errorCodes.find(
        (e) => {
          return e.id === id;
        }
      );
      return error;

  }

  addErrorCode(error: Error) {

    this.errorCodes.push(error);
  }

  updateErrorCode(errorInfo: Error) {

    const error = this.errorCodes.find(
      (e) => {
        return e.id === errorInfo.id;
      });

      if (error) {
        error.id = errorInfo.id;
        error.description = errorInfo.description;
      }

  }

  updateCurrentError(id: number) {

    this.currentError = this.getError(id);
  }

  resetCurrentError() {

    this.currentError = this.getError(100);
    console.log('desc ' + this.currentError.description);
  }

  getCurrentError(): Error {

    console.log('Current Error' + this.currentError);
    return this.currentError;
  }
}
