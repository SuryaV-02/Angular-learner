import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingCompComponent } from './two-way-binding-comp.component';

describe('TwoWayBindingCompComponent', () => {
  let component: TwoWayBindingCompComponent;
  let fixture: ComponentFixture<TwoWayBindingCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
