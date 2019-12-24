import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSettingComponent } from './program-setting.component';

describe('ProgramSettingComponent', () => {
  let component: ProgramSettingComponent;
  let fixture: ComponentFixture<ProgramSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
