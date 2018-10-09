import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {
  @Input()
  loading = false;

  @Input()
  hasMore = true;

  @Input()
  color = '#808695';

  @Output()
  startLoading = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickLoading() {
    this.startLoading.emit();
  }
}
