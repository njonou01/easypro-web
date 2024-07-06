import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHeroesSectionComponent } from './our-heroes-section.component';

describe('OurHeroesSectionComponent', () => {
  let component: OurHeroesSectionComponent;
  let fixture: ComponentFixture<OurHeroesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHeroesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHeroesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
