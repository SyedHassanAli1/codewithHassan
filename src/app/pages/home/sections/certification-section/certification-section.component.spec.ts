import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSectionComponent } from './certification-section.component';

describe('CertificationSectionComponent', () => {
  let component: CertificationSectionComponent;
  let fixture: ComponentFixture<CertificationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
