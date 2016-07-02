import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

let users = [
  new User('admin@admin.com', 'adm9'),
  new User('user1@gmail.com', 'a23')
];

@Injectable()
export class LoginService {

  constructor( private _router: Router ) {

  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['/']);
  }

  login(user) {
    let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['/']);
      return true;
    }
    return false;

  }

   checkCredentials() {
    if (localStorage.getItem('user') === null) {
        this._router.navigate(['Login']);
    }
  }
}
