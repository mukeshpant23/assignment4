import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  colors = ['yellow', 'red', 'green', 'blue', 'black'];
  time: number = 3000;
  constructor() { }

  ngOnInit() {
  }

}
