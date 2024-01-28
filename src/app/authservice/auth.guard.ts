import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(): boolean{
    if (sessionStorage.getItem('authToken')) {
      return true;
    }
    else {
      localStorage.clear();
      this.router.navigate(['/login'])
      return false;
    }
  }
}