import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lng-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [
    {
      itemImageSrc: 'https://images4.alphacoders.com/131/1313071.jpeg',
      thumbnailImageSrc: 'https://images4.alphacoders.com/131/1313071.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://images.hdqwalls.com/download/deadpool-with-ford-raptor-8m-2880x1800.jpg',
      thumbnailImageSrc: 'https://images4.alphacoders.com/131/1313071.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: 'https://wallpapers.com/images/hd/ford-mustang-mach-1-muscle-car-a3xgi2ab9tdzxy6n.jpg',
      thumbnailImageSrc: 'https://images4.alphacoders.com/131/1313071.jpeg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    }
  ];


  responsiveOptions!: any[];

  constructor() { }

  ngOnInit() {
  }
}
