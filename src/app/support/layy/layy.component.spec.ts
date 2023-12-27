import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayyComponent } from './layy.component';

describe('LayyComponent', () => {
  let component: LayyComponent;
  let fixture: ComponentFixture<LayyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
