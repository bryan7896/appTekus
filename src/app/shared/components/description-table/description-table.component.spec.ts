import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTableComponent } from './description-table.component';

describe('DescriptionTableComponent', () => {
  let component: DescriptionTableComponent;
  let fixture: ComponentFixture<DescriptionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
