import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;

  constructor(private router: Router, private userService:UserService, private toastr: ToastrService, private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(form:NgForm){

    this.userService.getUsers().subscribe(res =>{
      console.log(res);
      let users: any=res;
      let exists= false;
      let loggedInUser=null;
      for(let obj of users){
        if(obj.email==this.email && obj.password==this.password){
          exists=true;
          delete obj["password"];
          loggedInUser=obj;
          break;
        }
      }
      if (exists) {
        form.reset();
        
        this.authService.storeLoginDetails(loggedInUser);
        if (loggedInUser.role == "USER") {
          this.toastr.success("User LoggedIn");
          this.router.navigate(["home"]);

        }
        else if(loggedInUser.role=="ADMIN"){
            this.toastr.success("Admin LoggedIn");
            this.router.navigate(['home']);
           
        }

      }
      else {
        this.toastr.error("Invalid Credentials");
      }
    })
  }
 

}