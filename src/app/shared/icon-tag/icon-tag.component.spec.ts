import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTagComponent } from './icon-tag.component';

describe('IconTagComponent', () => {
  let component: IconTagComponent;
  let fixture: ComponentFixture<IconTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
