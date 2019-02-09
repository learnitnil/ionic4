import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  btnClicked(){
    console.log('btn clicked')
  }

  iconClicked(){
    console.log("icon clicked")
  }

}
