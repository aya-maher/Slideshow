import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  name:string="";

  clickme(){
    this.name = "aya";
  }

  title = 'main';
}
