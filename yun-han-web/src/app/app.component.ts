import { Component, OnInit } from '@angular/core';
import {store, GLOBAL_TITLE} from '../store/global';
import { global } from '@angular/core/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isCollapsed = false;

  get globalTitle() {
    return store.getStore(GLOBAL_TITLE, '云汉教育');
  }

  ngOnInit(): void {
    store.setStore(GLOBAL_TITLE, '云汉教育');
  }
}
