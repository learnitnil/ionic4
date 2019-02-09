import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.page.html',
  styleUrls: ['./heros.page.scss'],
})
export class HerosPage implements OnInit {

  constructor(public router:Router) { }

  goBack(){
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }

}
