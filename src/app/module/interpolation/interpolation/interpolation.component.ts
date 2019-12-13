import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {


  city = "pune";
  state = "maharashtra";
  ans ="1";
  url:any;
  
  getState(): string {
    return this.state
  }

  constructor() { }

  ngOnInit() {
  }


  openFile(myFile) {
    myFile.click();
  }

}
