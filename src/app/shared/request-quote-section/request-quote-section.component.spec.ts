import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuoteSectionComponent } from './request-quote-section.component';

describe('RequestQuoteSectionComponent', () => {
  let component: RequestQuoteSectionComponent;
  let fixture: ComponentFixture<RequestQuoteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestQuoteSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestQuoteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
