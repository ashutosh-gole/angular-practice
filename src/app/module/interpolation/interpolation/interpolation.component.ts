import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  city = "pune";
  state = "maharashtra";

  getState(): string {
    return this.state
  }

  constructor() { }

  ngOnInit() {
  }

}
