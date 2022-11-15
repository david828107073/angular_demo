import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSize3Component } from './font-size3.component';

describe('FontSize3Component', () => {
  let component: FontSize3Component;
  let fixture: ComponentFixture<FontSize3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSize3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSize3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
