import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  options = [];

  constructor() { }

  ngOnInit() {
    this.options = ['a', 'b', 'c'];
  }

}
