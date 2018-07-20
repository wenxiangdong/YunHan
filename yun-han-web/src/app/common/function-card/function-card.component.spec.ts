import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCardComponent } from './function-card.component';

describe('FunctionCardComponent', () => {
  let component: FunctionCardComponent;
  let fixture: ComponentFixture<FunctionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
