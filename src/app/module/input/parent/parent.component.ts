import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  studentData:object;
  childdata:object;

  constructor() { }

  ngOnInit() {
  }

  setData() {
    this.studentData = {
      'name':"akshay",
      'age':'25',
      'mob':9876543210
    };
  }

  getDataFromParent(childdata:object) {
    this.childdata = childdata;
    console.log(childdata);
  }

}
