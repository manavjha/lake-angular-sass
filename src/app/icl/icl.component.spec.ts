import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICLComponent } from './icl.component';

describe('ICLComponent', () => {
  let component: ICLComponent;
  let fixture: ComponentFixture<ICLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
