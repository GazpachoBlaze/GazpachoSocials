import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoggyComponent } from './hoggy.component';

describe('HoggyComponent', () => {
  let component: HoggyComponent;
  let fixture: ComponentFixture<HoggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoggyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
