import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  viewWork(work: string, size: number) {
    this.router.navigate([`view-work/${work}/${size}`]);
  }

}
