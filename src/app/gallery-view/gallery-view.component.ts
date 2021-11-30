import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})
export class GalleryViewComponent implements OnInit {

  gallery: Gallery;
  current: string;
  constructor() { }

  ngOnInit() {
  }
  open(name: string, items) {
    this.gallery = {
      name,
      images: this.getImages(name, items)
    };
    this.current = this.gallery.images[0];
  }
  close() {
    this.gallery = undefined;
  }
  getImages(name: string, items: any): string[] {
    const images = [];
    for (let i = 1; i <= items; i++) {
      images.push(`../../assets/gallery/${name}/${i}.jpg`);
    }
    return images;
  }
  select(image: string) {
    this.current = image;
  }
}



export interface Gallery {
  name: string;
  images: string[];
}