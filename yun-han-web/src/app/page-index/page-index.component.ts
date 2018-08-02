import { Component, OnInit } from '@angular/core';
import { GLOBAL_TITLE, store } from '../../store/global';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    store.setStore(GLOBAL_TITLE, '云汉教育');
  }

}
