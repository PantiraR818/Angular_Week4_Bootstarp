import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number =5;
  n2: number =2;
  picName:string = "https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_960_720.png";

  // Func
  hi(name:string){
    alert("Hi Hi!!"+ name);
  }
}

