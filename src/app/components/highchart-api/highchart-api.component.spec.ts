import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartApiComponent } from './highchart-api.component';

describe('HighchartApiComponent', () => {
  let component: HighchartApiComponent;
  let fixture: ComponentFixture<HighchartApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
