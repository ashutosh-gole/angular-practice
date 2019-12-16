import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() data: object;
  @Output() dataEvent = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("data ==> ", this.data)
  }

}
