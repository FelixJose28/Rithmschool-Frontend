import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.showHide();
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

}
