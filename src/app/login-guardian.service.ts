import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardian implements CanActivate{
    
    constructor(private loginService: LoginService,
                private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       if( this.loginService.isAutenticado() ){
           return true;
       }else{
           this.route.navigate(['']);
           alert("Email / Password: Incorrectos!!");
           return false;
       }
    }

}