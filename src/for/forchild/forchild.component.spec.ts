import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForchildComponent } from './forchild.component';

describe('ForchildComponent', () => {
  let component: ForchildComponent;
  let fixture: ComponentFixture<ForchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
