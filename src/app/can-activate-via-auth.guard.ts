import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }

    canActivate() {
        return this.authService.isAuthenticated;
    }
}