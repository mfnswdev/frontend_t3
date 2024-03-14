import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSessoesComponent } from './listar-sessoes.component';

describe('ListarSessoesComponent', () => {
  let component: ListarSessoesComponent;
  let fixture: ComponentFixture<ListarSessoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSessoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSessoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
