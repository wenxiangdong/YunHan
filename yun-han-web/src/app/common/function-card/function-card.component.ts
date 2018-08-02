import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/utils/logger.service';

@Component({
  selector: 'app-function-card',
  templateUrl: './function-card.component.html',
  styleUrls: ['./function-card.component.css']
})
export class FunctionCardComponent implements OnInit {

  private TAG = 'FunctionCardComponent';

  @Input()
  public link: string;

  @Input()
  public name = '功能';

  @Input()
  public icon;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  onGo() {
   this.logger.info(this.TAG, 'on go');
  }

}
