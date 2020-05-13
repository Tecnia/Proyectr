import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( 
    private router: Router
  ) {}

  pushregistrar(){
    this.router.navigate(['registrar']);
  }
  admin(){
    this.router.navigate(['hadmin']);
  }


}
