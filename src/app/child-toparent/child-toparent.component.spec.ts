import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToparentComponent } from './child-toparent.component';

describe('ChildToparentComponent', () => {
  let component: ChildToparentComponent;
  let fixture: ComponentFixture<ChildToparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildToparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildToparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
