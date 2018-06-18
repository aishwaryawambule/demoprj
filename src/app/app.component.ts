import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  row = "initial setup";
  inputvalue : string = "input" ;
  status = "no button clicked";
  title = 'app';
  id = Math.random();
  color;
  showdate = false;
  todaysdate = [];
  buttonstatus = this.id > 0.5 ? "online" : "offline";
disablebutton = false;
constructor(){
  setTimeout(() => {
    return this.disablebutton = true;
  }  ,3000);
}

getInput(e : any){
  console.log(e);
this.inputvalue = e.target.value;
}
getData(){
  this.status = "clicked";
  
}
getColor(){
 return this.buttonstatus === "online" ? "lightgreen" : "red"; 
  
}

datedisplay(){
this.showdate = !this.showdate;
this.todaysdate.push("concern"+this.showdate);

}
}
