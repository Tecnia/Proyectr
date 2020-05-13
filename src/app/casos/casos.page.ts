import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 800
  };

  constructor() { }

  ngOnInit() {
  }

}