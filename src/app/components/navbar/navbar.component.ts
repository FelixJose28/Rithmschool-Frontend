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
    const iconMenu = document.querySelector('#menuOption');
    const linksNavBarId = document.querySelector('#linksNavBarId');
    iconMenu?.addEventListener('click',()=>
      {
        linksNavBarId?.classList.toggle("linksnavbar")
      })
  }

}
