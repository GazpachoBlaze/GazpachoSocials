import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EiiiComponent } from './eiii.component';

describe('EiiiComponent', () => {
  let component: EiiiComponent;
  let fixture: ComponentFixture<EiiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EiiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EiiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
