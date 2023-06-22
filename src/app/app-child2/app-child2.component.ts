import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app-child2',
  templateUrl: './app-child2.component.html',
  styleUrls: ['./app-child2.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppChild2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
