import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPlaceholderComponent } from './dropdown-placeholder.component';

describe('DropdownPlaceholderComponent', () => {
  let component: DropdownPlaceholderComponent;
  let fixture: ComponentFixture<DropdownPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
