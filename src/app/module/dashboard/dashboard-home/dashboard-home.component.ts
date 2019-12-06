import { Component, OnInit } from '@angular/core';
import { ConceptModel } from 'src/app/core/models/concept.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  concepts: ConceptModel[] = [
    {
      name: "resp-flex",
      path: "/resp-flex"
    },
    {
      name: "ngIf",
      path: "/ng-if"
    },
    {
      name: "ngFor",
      path: "/ng-for"
    },
    {
      name: "ngSwitchCase",
      path: "/ng-switch-case"
    },
    {
      name: "pipe",
      path: "/pipe"
    },
    {
      name: "http",
      path: "/http"
    },
    {
      name: "input",
      path: "/input"
    },
    {
      name: "output",
      path: "/output"
    },
    {
      name: "interpolation",
      path: "/interpolation"
    },
    {
      name: "event-binding",
      path: "/event-binding"
    },
    {
      name: "property-binding",
      path: "/property-binding"
    },
    {
      name: "services",
      path: "/services"
    },
    {
      name: "routing",
      path: "/routing"
    },
    {
      name: "forms",
      path: "/forms"
    },
    {
      name: "animation",
      path: "/animation"
    },
    {
      name: "viewChild",
      path: "/viewChild"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
