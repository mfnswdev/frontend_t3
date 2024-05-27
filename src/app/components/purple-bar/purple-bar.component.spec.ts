import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleBarComponent } from './purple-bar.component';

describe('PurpleBarComponent', () => {
  let component: PurpleBarComponent;
  let fixture: ComponentFixture<PurpleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurpleBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurpleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
