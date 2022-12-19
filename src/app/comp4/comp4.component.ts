import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  names:string="";
  id:number[]=[];
  count=1;
  func2(){
    this.id.push(this.count++);
    this.names="hello"
 }
}