import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSerComponent } from './our-ser.component';

describe('OurSerComponent', () => {
  let component: OurSerComponent;
  let fixture: ComponentFixture<OurSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
