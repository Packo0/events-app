import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { last } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: IUser

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Pavel',
      lastName: 'Dimitrov'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}
