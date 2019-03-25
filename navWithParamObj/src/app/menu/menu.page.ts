import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public router:Router, public activatedRoute:ActivatedRoute,
              public dataService:DataService) { }

  goBack(){
    this.router.navigateByUrl('home')
  }

  ngOnInit() {
    let paramData = this.dataService.getParamData()
    console.log(paramData)
  }

}
