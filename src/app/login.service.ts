import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
 
@Injectable()
export class LoginService{

    token: string;

    constructor(private router:Router){}

    login(email: string, password: string){
        
        firebase.auth().signInWithEmailAndPassword(email, password).
            then(
                response => {
                    firebase.auth().currentUser.getIdToken().then(
                        token => {
                            this.token = token;
                        }
                    )
                }   
                             
            )
           // if(email == "cquinterog9@gmail.com" && password == "1q2w3e4r5t" || email == "victor.tobar.1403@gmail.com" && password =="fat23kdc"){
            this.router.navigate(['inicio']);
           // }else{
           //     alert("Email / Password: INCORRECTOS!! ");
          //  }

    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        //si el token es ditinto de nulo, regresa verdadero!
        return this.token != null;
    }

    logout(){  
        firebase.auth().signOut().then( () => {
          this.token = null;
          this.router.navigate(['']);
        }).catch(error => console.log("error logout:" + error));
    }

}