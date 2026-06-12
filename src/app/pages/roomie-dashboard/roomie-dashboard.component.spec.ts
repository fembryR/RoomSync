import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomieDashboardComponent } from './roomie-dashboard.component';

describe('RoomieDashboardComponent', () => {
  let component: RoomieDashboardComponent;
  let fixture: ComponentFixture<RoomieDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomieDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
