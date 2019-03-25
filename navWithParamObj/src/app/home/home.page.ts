import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router, public dataService:DataService){
    console.log("Hi There !")
  }

  ngOnInit(){
    console.log('Hi There ')
  }

  btnClicked(){
    console.log('btnClicked')
    let dataObj = {
      "movie" : "INfinityWar",
      "hero" : "IronMan"
    }
    this.dataService.setParamData(dataObj)
    this.router.navigateByUrl('menu')  
  }
}
