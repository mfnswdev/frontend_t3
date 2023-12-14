import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredadorComponent } from './predador.component';

describe('PredadorComponent', () => {
  let component: PredadorComponent;
  let fixture: ComponentFixture<PredadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
