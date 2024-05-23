import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormPageComponent } from './contact-form-page.component';

describe('ContactFormPageComponent', () => {
  let component: ContactFormPageComponent;
  let fixture: ComponentFixture<ContactFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
