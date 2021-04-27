import { Role } from './../../models/Role';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  userRol?: number;
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.auth.getCurrentUser()
    .then((userLogged)=> this.auth.getRol()
      .then((userRolLogged)=>
        {
          this.userRol=userRolLogged;
          console.log(this.userRol)}
    ));
    this.showHide();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.auth.getCurrentUser()
    .then((userLogged)=> this.auth.getRol()
      .then((userRolLogged)=>
        {
          this.userRol=userRolLogged;
          console.log(this.userRol)}
    ));
  }

  showHide(){
    const toggle = document.querySelector('.navbar-toggle');
    const navbarLink = document.getElementsByClassName('navbar-links');

    toggle?.addEventListener('click',()=>{
      for (let i = 0; i < navbarLink.length; i++) {
        navbarLink[i].classList.toggle('activate')
      }
    });

  }
  logout(){
    this.auth.logout();
    this.router.navigateByUrl('/shared/homepage');
  }
  get Roles() {
    return Role;
  }

}
