import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularServiveSectionComponent } from './popular-servive-section.component';

describe('PopularServiveSectionComponent', () => {
  let component: PopularServiveSectionComponent;
  let fixture: ComponentFixture<PopularServiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularServiveSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularServiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
