import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServciesSectionComponent } from './servcies-section.component';

describe('ServciesSectionComponent', () => {
  let component: ServciesSectionComponent;
  let fixture: ComponentFixture<ServciesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServciesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServciesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
