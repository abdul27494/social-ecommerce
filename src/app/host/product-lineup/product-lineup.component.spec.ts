import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLineupComponent } from './product-lineup.component';

describe('ProductLineupComponent', () => {
  let component: ProductLineupComponent;
  let fixture: ComponentFixture<ProductLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
