import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeHomeComponent } from './pipe-home.component';

describe('PipeHomeComponent', () => {
  let component: PipeHomeComponent;
  let fixture: ComponentFixture<PipeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
