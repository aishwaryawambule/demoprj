import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
call = ["test"];
row;
element;
callstatus = false;
  constructor() { 
setTimeout(() => {
  this.callstatus = true;

},2000);
  }
  ngOnInit() {
  }

  create(){
this.call.push("row created");
this.element = "row has been created";
  }
}
