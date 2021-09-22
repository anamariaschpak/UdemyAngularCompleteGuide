import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', --> practically, you make app-servers an attribute, so in app.component it has to be a property on an element(a div for example)
  // selector: '.app-servers',  --> practically, you make app-servers a class, so in app.component it has to be a class on an element(a div for example)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
