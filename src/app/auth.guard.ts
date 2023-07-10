import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { loginService } from './service/login.service';

@Injectable({

  providedIn: 'root',

})

export class AuthGuardService implements CanActivate {
  JwtHelperService: any;

  constructor(

    private userdetailservice: loginService,

    private router: Router,

  ) {}




  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = localStorage.getItem('token');




    if (token && !this.JwtHelperService.isTokenExpired(token)) {

      return true;

    }




    if (this.userdetailservice.loggedIn()) {

      return true;

    } else {

      this.router.navigate(['']);

      return false;

    }

  }

}
