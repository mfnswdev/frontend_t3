import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharSessaoComponent } from './detalhar-sessao.component';

describe('DetalharSessaoComponent', () => {
  let component: DetalharSessaoComponent;
  let fixture: ComponentFixture<DetalharSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharSessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
