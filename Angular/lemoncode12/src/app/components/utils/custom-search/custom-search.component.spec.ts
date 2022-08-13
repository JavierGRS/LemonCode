import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchComponent } from './custom-search.component';

describe('CustomSearchComponent', () => {
  let component: CustomSearchComponent;
  let fixture: ComponentFixture<CustomSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
