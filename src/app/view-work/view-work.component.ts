import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss']
})
export class ViewWorkComponent implements OnInit {
  workId: string;
  items: string[] = [];
  size: number;
  work;
  constructor(
    private activatedRoute: ActivatedRoute, private router: Router
  ) {
    this.activatedRoute.params.subscribe(r => {
      this.workId = r.id;
      this.size = r.size;
      this.loadImages();
    });
  }

  ngOnInit() {
  }
  loadImages() {
    this.items = [];
    this.work = '';
    for (let i = 1; i <= this.size; i++) {
      this.items.push(`assets/gallery/${this.workId}/${i}.jpg`);
    }
    this.workId.split('-').forEach(x => {
      this.work += ` ${x}`;
    });
  }
  goto(id) {
    this.router.navigate([id]);
  }
}
