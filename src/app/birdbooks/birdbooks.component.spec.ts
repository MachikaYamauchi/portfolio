import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdbooksComponent } from './birdbooks.component';

describe('BirdbooksComponent', () => {
  let component: BirdbooksComponent;
  let fixture: ComponentFixture<BirdbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
