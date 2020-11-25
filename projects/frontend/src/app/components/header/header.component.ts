import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedInUser;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.isLoggedInUser =  localStorage.getItem("LOGGED_IN_USER") != null ? true: false;
  }


  logout(){
    localStorage.clear();
    this.router.navigate(["login"])
  }

}