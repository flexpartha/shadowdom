import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppChildComponent implements OnInit {

  title= 'AppChild';

  constructor() { }

  ngOnInit(): void {
  }

}
