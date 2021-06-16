import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoChoiceComponent } from './eco-choice.component';

describe('EcoChoiceComponent', () => {
  let component: EcoChoiceComponent;
  let fixture: ComponentFixture<EcoChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
