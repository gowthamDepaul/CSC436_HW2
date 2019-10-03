import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  BangedLike:boolean;
  constructor() { }
  LikeImage(likecheck:boolean):boolean{
this.BangedLike=!likecheck;
return this.BangedLike;
  }
}
