import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  updatePercentage() {
  }
  viewWork(work: string, size: number) {
    this.router.navigate([`view-work/${work}/${size}`]);
  }

}
