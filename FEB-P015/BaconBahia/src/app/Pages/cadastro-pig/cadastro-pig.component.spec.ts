import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPigComponent } from './cadastro-pig.component';

describe('CadastroPigComponent', () => {
  let component: CadastroPigComponent;
  let fixture: ComponentFixture<CadastroPigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
