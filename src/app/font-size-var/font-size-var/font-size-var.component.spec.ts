import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeVarComponent } from './font-size-var.component';

describe('FontSizeVarComponent', () => {
  let component: FontSizeVarComponent;
  let fixture: ComponentFixture<FontSizeVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizeVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
