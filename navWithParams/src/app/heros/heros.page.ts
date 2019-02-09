import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.page.html',
  styleUrls: ['./heros.page.scss'],
})
export class HerosPage implements OnInit {

  constructor( public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    let dataRecv = this.activeRoute.snapshot.paramMap.get('name')
    let dataMovie = this.activeRoute.snapshot.paramMap.get('movie')
    let dataAll = this.activeRoute.snapshot.params
    console.log(dataRecv)
    console.log(dataMovie)
    console.log(dataAll)
  }

}
