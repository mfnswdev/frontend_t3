import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPesoComponent } from './cadastra-peso.component';

describe('CadastraPesoComponent', () => {
  let component: CadastraPesoComponent;
  let fixture: ComponentFixture<CadastraPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastraPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
