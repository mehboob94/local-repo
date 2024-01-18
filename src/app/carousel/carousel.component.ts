import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgIf } from '@angular/common';

@Component({
  selector: 'apps-carouel',
  standalone: true,
	imports: [NgbCarouselModule,],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);  

  constructor() { }

  ngOnInit(): void {
  }

}
