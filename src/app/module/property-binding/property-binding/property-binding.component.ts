import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  //for <img> tag
  mySrc = "http://professional-guru.com/wp-content/uploads/2017/08/C2Sg2H8WgAAsW40.jpg";
  myHeight = "50";
  myWidth = "50";
  myAlt = "angular image"
  myTitle = "angular image from google"

  //for <input> tag
  myType1 = "text";
  myAutofocus = "true"
  myId1 = "name";
  myName1 = "name";

  //for <input> tag
  myType2 = "password";

  //for <input> tag
  myType3 = "submit";
  myValue = "send";
  myName2 = "sub"

  //for <input> tag
  myType4 = "number";
  myMin = "1";
  myMax = "10";

  //for <video> tag
  myVideoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";
  myType5 = "video/mp4";

  constructor() { }

  ngOnInit() {
  }

}
