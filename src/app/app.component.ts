import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matharchitectsstudio';
  showMenu: boolean;
  logoWidth = '20rem';
  ngOnInit() {
  }
  closeMenu(){
    this.showMenu = false;
  }
  toggle() {
    this.showMenu = !this.showMenu;
  }
  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    console.log(verticalOffset);
    if (verticalOffset > 700) {
      this.logoWidth = '10rem';
    }
    else {
      this.logoWidth = '20rem';
    }

  }
}