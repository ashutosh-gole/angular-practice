import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespFlexComponent } from './resp-flex.component';

describe('RespFlexComponent', () => {
  let component: RespFlexComponent;
  let fixture: ComponentFixture<RespFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
