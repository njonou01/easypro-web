import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreSectionComponent } from './know-more-section.component';

describe('KnowMoreSectionComponent', () => {
  let component: KnowMoreSectionComponent;
  let fixture: ComponentFixture<KnowMoreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowMoreSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
