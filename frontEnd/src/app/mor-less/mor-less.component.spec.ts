import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorLessComponent } from './mor-less.component';

describe('MorLessComponent', () => {
  let component: MorLessComponent;
  let fixture: ComponentFixture<MorLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorLessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
