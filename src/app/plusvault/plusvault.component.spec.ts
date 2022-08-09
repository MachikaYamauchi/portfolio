import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusvaultComponent } from './plusvault.component';

describe('PlusvaultComponent', () => {
  let component: PlusvaultComponent;
  let fixture: ComponentFixture<PlusvaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusvaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusvaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
