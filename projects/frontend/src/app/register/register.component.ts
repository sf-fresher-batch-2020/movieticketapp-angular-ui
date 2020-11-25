import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) { }

  ngOnInit(): void {
  }
  username: string;
  email: string;
  password: string;

  register(form:NgForm){
    
    let formData={name:this.username,email:this.email, password: this.password, role:"USER", createdDate:new Date().toJSON()};
    console.log(JSON.stringify(formData));
    this.userService.register(formData).subscribe(res =>{
      console.log(res);
      this.toastr.success("Registered");
      form.reset();
      this.router.navigate(["login"]); // redirects to login
    });
  }

}