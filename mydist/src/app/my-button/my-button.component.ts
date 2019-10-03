import { Component, OnInit } from '@angular/core';
import {MyService} from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  providers:[MyService]
})
export class MyButtonComponent implements OnInit {

  liked:boolean;
  constructor(private service: MyService) {
    this.service=service;
   }
   tooglebuttoncolor(){
    if(this.liked){
      return 'is-liked';
      
    }
    return '';
  }
  toggleflavorbutton(){
  this.liked=this.service.LikeImage(this.liked)
  }
  

  ngOnInit() {
    this.liked=false;
  }

}
