import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorListasComponent } from './gerador-listas.component';

describe('GeradorListasComponent', () => {
  let component: GeradorListasComponent;
  let fixture: ComponentFixture<GeradorListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradorListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
