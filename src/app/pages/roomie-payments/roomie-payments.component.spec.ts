import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomiePaymentsComponent } from './roomie-payments.component';

describe('RoomiePaymentsComponent', () => {
  let component: RoomiePaymentsComponent;
  let fixture: ComponentFixture<RoomiePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomiePaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomiePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
