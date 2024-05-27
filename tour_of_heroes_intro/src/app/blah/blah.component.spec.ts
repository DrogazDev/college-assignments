import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlahComponent } from './blah.component';

describe('BlahComponent', () => {
  let component: BlahComponent;
  let fixture: ComponentFixture<BlahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
