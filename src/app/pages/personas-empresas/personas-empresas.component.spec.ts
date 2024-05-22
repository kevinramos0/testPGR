import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasEmpresasComponent } from './personas-empresas.component';

describe('PersonasEmpresasComponent', () => {
  let component: PersonasEmpresasComponent;
  let fixture: ComponentFixture<PersonasEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonasEmpresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonasEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
