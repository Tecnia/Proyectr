import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hadmin',
  templateUrl: './hadmin.page.html',
  styleUrls: ['./hadmin.page.scss'],
})
export class HadminPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router:Router
    
    ) { }
    Casos(){
      this.router.navigate(['casos']);
    }
    Especialista(){
      this.router.navigate(['especialista']);
    }

    Geolocalizacion(){
      this.router.navigate(['geolocalizacion']);
    }

    Camara(){
      this.router.navigate(['camara']);
    }



  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  }

}
