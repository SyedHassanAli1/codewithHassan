import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsSectionComponent } from './facts-section.component';

describe('FactsSectionComponent', () => {
  let component: FactsSectionComponent;
  let fixture: ComponentFixture<FactsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
